function Cons(options) {
  
  this.constraint=Constraint.create(options);
  
  World.add(world, this.constraint);
  
var aPos=this.constraint.bodyA.position;
 
var bPos=this.constraint.bodyB.position;
  
  this.isOffScreen =function(){
	 var pos=this.constraint.position;
	 
	 return (pos.y+cam.y>height+100);
  
  }
  
  this.removeFromWorld=function(){
  	
  	World.remove(world,this.constraint);
  
  }
  
  
  
  this.show = function() {
  
  //console.log(this.constraint.pointA.x)
  	stroke(255);
  	strokeWeight(1);
  	push();
    //translate(this.constraint.pointA.x+cam.x, this.constraint.pointA.y+cam.y);
    
    console.log(this.constraint);
    
    
    
   translate(aPos.x+cam.x, aPos.y+cam.y);
  	line(this.constraint.pointA.x,this.constraint.pointA.y,0,0)
  	pop();
  
  }
 
/*
  this.show = function() {
  
  
    var pos = this.constraint.position;
    var angle = this.body.angle;
    push();
    translate(pos.x+cam.x, pos.y+cam.y);
    rotate(angle);
    rectMode(CENTER);
    
    
    
if(this.body.label==="Crate"){
    
    fill(130, 91, 31);
  strokeWeight(2);
  stroke(80, 41, 0)
  rect(0,0,this.w,this.h);
  
  
  rotate(radians(45));
  rect(0,0,this.w/10,sqrt(pow(this.h,2)+pow(this.w,2)))
  
  rotate(radians(90));
  
  rect(0,0,this.w/10,sqrt(pow(this.h,2)+pow(this.w,2)))
  
  }
  
  else{
  	fill(127)
  	stroke(255)
  	rect(0,0,this.w,this.h);
  }
  
  if(this.body.label==="Player"){
  
  	//console.log(this.body);
  	if(abs(this.body.velocity.x)<8){
  	this.body.force.x=player.xv;
  	}
  	
  	if(abs(this.body.velocity.y)<8){
  	this.body.force.y=player.yv;
  	
  	}
  	//console.log(this.body.velocity.x)
  	
  
  }
  
  
  
  if(this.body.label==="FlyingArrow"){
  

   
   
   
   var maxspeed=0.2;
  
  if(this.body.velocity.x>maxspeed){
  	Matter.Body.setAngle(this.body,-atan2(this.body.velocity.x,this.body.velocity.y))
  	
  	}
  	
  	
  
  }
    
    
    pop();
    
   
  };*/
}