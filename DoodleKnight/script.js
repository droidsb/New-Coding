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
		
		//console.log(boxes[p].id())
		
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

boxes.push(new Box(-100, 610, 10000,60, {friction: 0.3,restitution: 0.6, isStatic: true, angle:radians(0), collisionFilter: {mask: GroundCategory | defaultCategory | ArrowCategory, category: GroundCategory}, label: "default"}, "default"));

boxes.push(new Box(400, 550, 30,30, {friction: 0.3,restitution: 0.6, isStatic: false, angle:radians(0), label:"Player"}));


boxes.push(new Box(500, 550, 30,50, {friction: 0.3,restitution: 0.6, isStatic: false, angle:radians(0), label:"Mob", collisionFilter :{mask: GroundCategory | defaultCategory | ArrowCategory | MobCategory, category: MobCategory}, label: "default"}, "default"));




// add all of the bodies to the world
//World.add(world, ground);

// run the engine
//Engine.run(engine); 

function newCrate(x,y){


boxes.push(new Box(x, y, 40,40, {friction: 0.3,restitution: 0.6, isStatic: false, collisionFilter :{mask: GroundCategory | defaultCategory | ArrowCategory | MobCategory, category: MobCategory}, label: "Crate"}, "default"));

}


newCrate(600,550);

newCrate(680,550);

newCrate(600,520);

newCrate(680,520);

newCrate(620,480);

newCrate(658,480);

newCrate(582,480);

newCrate(700,480);

newCrate(610,440);

newCrate(670,440);

newCrate(640,400);

newCrate(640,360);


newCrate(720,550);
newCrate(720,520);

newCrate(560,550);
newCrate(560,520);


  
  
}





function mouseDragged(){

	
	
	

}
var id1;

var boxl=10;

function mousePressed(){

id1=bowDraw.play();









}

function angleBetween(p1,p2){


return Math.atan2(p2.y-p1.y, p2.x-p1.x);

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




var xd=(mouseX-cam.x)-boxpos.x;

var xy= (mouseY-cam.y)-boxpos.y;




//var angle=calcAngle(abs(xd), abs(xy));
//console.log(degrees(angle))





angle=angleBetween({x:mouseX-cam.x, y:mouseY-cam.y},{x:boxpos.x, y:boxpos.y});

//angle=angle+radians(90);

//var l=sqrt(pow(xd,2)+pow(xy,2))

var l=boxl*5

var tv={x:-(l*cos(angle))/30000, y:-(l*sin(angle))/30000}

boxl=0;

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
  
  for(var i=0; i<boxes.length; i++){

	if(boxes[i].type()==="Player"){
		
		boxpos=boxes[i].position();
	
	}

}

cam.x=-boxpos.x+width/2;

cam.y=-boxpos.y+height-200;
  
  
  
 Engine.update(engine);
 rectMode(CENTER)

 	
 
 
 
 for(var i=0; i<boxes.length; i++){
 
 	boxes[i].show();
 	
 	

 	
 	
 	
 	
 	
 	if(boxes[i].isOffScreen()){
 			
 			
 		//boxes[i].removeFromWorld();
 			
 		//World.remove(world, boxes[i])
 	
 		//boxes.splice(i,1);
 		
 		//i--;
 	
 	}
 
 }
 
 for(var i=0; i<constraints.length; i++){
 
 	constraints[i].show();
 
 }
 
 
 
  //console.log(world.bodies.length);
  
 // text(player.x,200,200);
 
 fill(255)



if(mouseIsPressed){
if(boxl<100){
boxl=boxl+1;

}

rectMode(CORNER)

rect(40, 40, boxl, 10)


}

rectMode(CENTER);

push();

var bowangle=angleBetween({x:mouseX-cam.x, y:mouseY-cam.y},{x:boxpos.x, y:boxpos.y});

translate(boxpos.x+cam.x,boxpos.y+cam.y)

rotate(bowangle+radians(180))

var bowl=11;

var bowx=20;

push()
fill(255)
noStroke()
translate(bowx-8,0)
rect(0,0,2,40)

pop()

stroke(68,48,34)
    	
    	fill(85,60,42)

push()
translate(bowx,-bowl)
rotate(radians(-35))
rect(0,0,5,30)
pop()

push()
translate(bowx,bowl)
rotate(radians(35))
rect(0,0,5,30)
pop()


pop();
  
  
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