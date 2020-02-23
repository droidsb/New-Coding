function Box(x, y, w, h, options) {
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);
  
 
  
  this.isOffScreen =function(){
	 var pos=this.body.position;
	 
	 return (pos.y+cam.y>height+100);
  
  }
  
  this.removeFromWorld=function(){
  	
  	World.remove(world,this.body);
  
  }
  
  this.position = function() {
  
  
  
  	return this.body.position;
  
  }
  
  this.angle = function() {
  
  
  
  	return this.body.angle;
  
  }
  
  this.type = function() {
  
  	return this.body.label;
  
  }
  
  this.id=function(){
  
  	return this.body.id;
  
  }

  this.show = function() {
    var pos = this.body.position;
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
  	Matter.Body.setAngle(this.body,-atan2(this.body.velocity.x,this.body.velocity.y)+radians(90))
  	
  	}
  	
  	
  
  }
    for(var p=0; p<staticArrows.length; p++){
    
    if(this.body.id===staticArrows[p].id){
    	push();
    	
    	rotate(-staticArrows[p].oldAngle)
    	
    	translate(-staticArrows[p].xOff,-staticArrows[p].yOff)
    	
    	rotate(staticArrows[p].angle)
    	
    	//console.log(degrees(staticArrows[p].angle))
    	
    	rect(0,0,40,5);
    	
    	pop();
    	
    
    }
    
    
    }
    
    pop();
    
   
  };
}