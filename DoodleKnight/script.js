var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Events = Matter.Events,
    Constraint= Matter.Constraint;

var engine;
var firstbox;
var world;

var ground;

var boxes=[];

var constraints=[];

var cam={x:0, y:0, speed:2};

var keys=[];

var player={xv:0, yv:0, speed:0.005}

var staticArrows=[];

 var defaultCategory = 0x0001,
        ArrowCategory = 0x0002,
        PlayerCategory = 0x0004,
        GroundCategory = 0x0008,
        MobCategory = 0x0016,
        NothingCategory=0x0032;
        
    
        
        var bowDraw = new Howl({
 				 src: ['Sound/BowDraw.mp3']
        
        });
        
        var arrowShoot = new Howl({
 				 src: ['Sound/ArrowShoot.mp3']
        
        });
        
        var arrowHit = new Howl({
 				 src: ['Sound/ArrowHit.mp3']
        
        });

function setup() {

	

  createCanvas(1200, 800);
  
  
  
// create an engine
engine = Engine.create();
world=engine.world;

function collision(event){

	var pairs=event.pairs;
	
	for(var i=0; i<pairs.length; i++){
	
	var bodyA=pairs[i].bodyA;
	
	var bodyB=pairs[i].bodyB;
	
	}
	
	
	
	//console.log(bodyB);
	
	//console.log(bodyB.label);
	
	//console.log(bodyA.label)

	
	if(bodyB.label==="FlyingArrow" && bodyA.label!=="FlyingArrow"){
	
		bodyB.label="StaticArrow"
		
		bodyB.collisionFilter.category=1;
		
		bodyB.collisionFilter.mask=NothingCategory;
	
	/*		var options1={

	bodyA: bodyA,
	bodyB, bodyB,
	length: 0,
	stiffness: 1,
	pointA:{x:bodyB.position.x-bodyA.position.x, y:bodyB.position.y-bodyA.position.y},
	pointB:{x:20,y:0}

}

constraints.push(new Cons(options1));

var options2={

	bodyA: bodyA,
	bodyB, bodyB,
	length: 0,
	stiffness: 1,
	pointA:{x:bodyB.position.x-bodyA.position.x, y:bodyB.position.y-bodyA.position.y},
	pointB:{x:10,y:0}
	
	

}

constraints.push(new Cons(options2));


*/

staticArrows.push({id:bodyA.id, xOff: bodyA.position.x-bodyB.position.x, yOff: bodyA.position.y-bodyB.position.y, oldAngle: bodyA.angle, angle: bodyB.angle})




//var constraint1 = Constraint.create(options1);








//console.log(bodyA.parts)

		//bodyB.parent=bodyA;
		
		//bodyB.isStatic=true;
		
		arrowHit.play();
		
		
		//console.log(bodyA)
		
		
		
		//Matter.Body.setParts(bodyA, [bodyA, bodyB])
		
		
		
		//Matter.Body.setParts(bodyA, [bodyA, bodyB])
		
		
		
		//bodyA.parts=[bodyA, Bodies.rectangle(0,0,5,40, {category:bodyA.category, mask:bodyA.mask})];
		
		
		
		
		for(var p=0; p<boxes.length; p++){
		
		console.log(boxes[p].id())
		
		if(boxes[p].id()===bodyB.id){
		
		//console.log("check2")
		
		boxes[p].removeFromWorld();
 			
 		
 	
 		boxes.splice(p,1);
		
		
		}
		
		}
		
		//boxes[b].removeFromWorld();
 			
 		
 	
 		//boxes.splice(b,1);
			
	}
	
}




Events.on(engine, 'collisionStart', collision);






// create two boxes and a ground


//ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

boxes.push(new Box(400, 610, 1000,60, {friction: 0.3,restitution: 0.6, isStatic: true, angle:radians(0), collisionFilter: {mask: GroundCategory | defaultCategory | ArrowCategory, category: GroundCategory}}));

boxes.push(new Box(400, 550, 30,30, {friction: 0.3,restitution: 0.6, isStatic: false, angle:radians(0), label:"Player"}));


boxes.push(new Box(550, 550, 30,50, {friction: 0.3,restitution: 0.6, isStatic: false, angle:radians(0), label:"Mob", collisionFilter :{mask: GroundCategory | defaultCategory | ArrowCategory | MobCategory, category: MobCategory}}));




// add all of the bodies to the world
//World.add(world, ground);

// run the engine
//Engine.run(engine); 

for(var i=0; i<20; i++){


//boxes.push(new Box(400+i/10,0-i*10, 40,40, {friction: 0.3,restitution: 0.6}, "crate"));

}
  
  
}



function mouseDragged(){

	
	
	

}
var id1;

function mousePressed(){

id1=bowDraw.play();



}

function mouseReleased(){

bowDraw.fade(1, 0, 500, id1);

arrowShoot.play();

var boxpos={};

for(var i=0; i<boxes.length; i++){

	if(boxes[i].type()==="Player"){
		
		boxpos=boxes[i].position();
	
	}

}




var xd=mouseX-boxpos.x;

var xy= mouseY-boxpos.y;




//var angle=calcAngle(abs(xd), abs(xy));
//console.log(degrees(angle))

function angleBetween(p1,p2){


return Math.atan2(p2.y-p1.y, p2.x-p1.x);

}



angle=angleBetween({x:mouseX, y:mouseY},{x:boxpos.x, y:boxpos.y});

//angle=angle+radians(90);

var l=sqrt(pow(xd,2)+pow(xy,2))

var tv={x:-(l*cos(angle))/30000, y:-(l*sin(angle))/30000}

/*if(xd<0){

	tv.x=-tv.x;

}

if(xy>0){

	tv.y=-tv.y;

}*/

//console.log(degrees(angle)-90)

boxes.push(new Box(boxpos.x,boxpos.y, 40,5, {friction: 0.3, frictionAir: 0.01,restitution: 0.6, force: {x:tv.x, y:tv.y}, label:"FlyingArrow",collisionFilter: {mask: GroundCategory | ArrowCategory | MobCategory, category: ArrowCategory}}));

}

function draw() {
  background(150);
  
  noStroke();
  
  
 Engine.update(engine);
 rectMode(CENTER)
 rect(200,200,10,10)
 
		push();
 		
 		translate(200,180)
 		
 		rotate(radians(90))
 		
 		//translate(0,-20)
 		
 		//rectMode(CENTER);
 		rect(-40,0, 40,5)
 	
 	pop();
 	
 
 
 
 for(var i=0; i<boxes.length; i++){
 
 	boxes[i].show();
 	
 	

 	
 	
 	
 	
 	
 	if(boxes[i].isOffScreen()){
 			
 			
 		boxes[i].removeFromWorld();
 			
 		//World.remove(world, boxes[i])
 	
 		boxes.splice(i,1);
 		
 		i--;
 	
 	}
 
 }
 
 for(var i=0; i<constraints.length; i++){
 
 	constraints[i].show();
 
 }
 
 
 
  //console.log(world.bodies.length);
  
 // text(player.x,200,200);
  
  
  
  if(keys[38]){
  
  	cam.y=cam.y-cam.speed;
  
  }
  
  if(keys[40]){
  
  	cam.y=cam.y+cam.speed;
  
  }
  
  if(keys[37]){
  
  	cam.x=cam.x-cam.speed;
  
  }
  
  if(keys[39]){
  
  	cam.x=cam.x+cam.speed;
  
  }
  
  
  
  
  if(keys[87]){
  
  	player.yv=-player.speed;
  
  }
  
  if(keys[83]){
  
  	player.yv=player.speed;
  
  }
  
 
  
  if(keys[87]===false && keys[83]===false){

	player.yv=0;

}
  
  
  
  if(keys[65]){
  
  	player.xv=-player.speed;
  
  }
  
  
  
  if(keys[68]){
  
  	player.xv=player.speed;
  
  }
  
if(keys[68]===false && keys[65]===false){

	player.xv=0;

}
  
  
}

function keyPressed(){


	keys[keyCode]=true;

}

function keyReleased(){


	keys[keyCode]=false;

}