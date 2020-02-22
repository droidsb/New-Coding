var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var firstbox;
var world;

var ground;

var boxes=[];

var cam={x:0, y:0, speed:2};

var keys=[];

function setup() {

	

  createCanvas(1000, 800);
  
  
  
// create an engine
engine = Engine.create();
world=engine.world;


// create two boxes and a ground


//ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

boxes.push(new Box(400, 610, 410,60, {friction: 0.3,restitution: 0.6, isStatic: true, angle:radians(0)}));

// add all of the bodies to the world
//World.add(world, ground);

// run the engine
//Engine.run(engine); 


  
  
}

function mouseDragged(){

	boxes.push(new Box(mouseX-cam.x, mouseY-cam.y, 20,20, {friction: 0.3,restitution: 0.6}));
	
	

}

function draw() {
  background(150);
  
  noStroke();
 Engine.update(engine);
 
 for(var i=0; i<boxes.length; i++){
 
 	boxes[i].show();
 	
 	if(boxes[i].isOffScreen()){
 			
 			
 		boxes[i].removeFromWorld();
 			
 		//World.remove(world, boxes[i])
 	
 		boxes.splice(i,1);
 		
 		i--;
 	
 	}
 
 }
  //console.log(world.bodies.length);
  
  text(cam.y,200,200);
  
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
  
  
}

function keyPressed(){


	keys[keyCode]=true;

}

function keyReleased(){


	keys[keyCode]=false;

}