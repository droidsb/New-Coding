function Circle(x, y, r, options) {
  this.body = Bodies.circle(x, y, r, options);
  this.r = r;
  
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
  
   this.label = function() {
  
  
  
  	return this.body.label;
  
  }
  
  this.velocity = function() {
  
  
  
  	return this.body.velocity;
  
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
    
    
    

  
  if(this.body.label==="Player"){
  
  	//console.log(this.body);
  	if(abs(this.body.velocity.x)<8){
  	this.body.force.x=player.xv;
  	}
  	
  	if(abs(this.body.velocity.y)<8){
  	this.body.force.y=player.yv;
  	
  	}
  	//console.log(this.body.velocity.x)
  	
  	//fill(127)
  	//stroke(255)
  	//ellipse(0,0,this.r*2,this.r*2);
  	
  
  }
  
   
  if(this.body.label==="default"){
  	fill(127)
  	stroke(255)
  	ellipse(0,0,this.r*2,this.r*2);
  }
  
  
  

 
  
 
    
    pop();
    
   
  };
}