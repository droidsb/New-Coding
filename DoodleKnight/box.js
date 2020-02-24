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
    
    
    
if(this.body.label==="Crate"){
    
    fill(130, 91, 31);
  strokeWeight(2);
  stroke(80, 41, 0)
  rect(0,0,this.w,this.h);
  
  push();
  rotate(radians(45));
  rect(0,0,this.w/10,sqrt(pow(this.h,2)+pow(this.w,2)))
  
  rotate(radians(90));
  
  rect(0,0,this.w/10,sqrt(pow(this.h,2)+pow(this.w,2)))
  
  pop();
  
  }
  
    if(this.body.label==="PlayerHead"){
  
 	this.body.position.x=boxpos.x
 	this.body.position.y=boxpos.y-50
  	
  //	fill(127)
  	//stroke(255)
  	//rect(0,0,this.w,this.h);
  	
  
  }
  
  if(this.body.label==="PlayerNeck"){
  
  //console.log(boxpos.x)
  
  	this.body.position.x=boxpos.x
  	this.body.position.y=boxpos.y-40
  	//console.log(this.body.velocity.x)
  	
  //	fill(127)
  	//stroke(255)
  	//rect(0,0,this.w,this.h);
  	
  
  }
  
   
  if(this.body.label==="default"){
  	fill(127)
  	stroke(255)
  	rect(0,0,this.w,this.h);
  }
  
  
  
  if(this.body.label==="FlyingArrow"){
  

   
   
    	stroke(68,48,34)
    	
    	fill(85,60,42)
		
		rect(0,0,30,3);
		
		
		fill(230)
		stroke(230)
		push()
		
		translate(-15,-2)
		
		rotate(radians(20))
    	rect(0,0,10,3)
    	pop();
    	
    	push()
		
		translate(-15,2)
		
		rotate(radians(-20))
    	rect(0,0,10,3)
    	pop();
		
		scale(0.8)

		
		translate(15,6)
		
		stroke(68,48,34)
    	
    	fill(85,60,42)
    	
    	rotate(radians(-90));
    	
    	triangle(0, 0, 6, 15, 12, 0)
    	
    	
    	
    
  
  	
  
  	Matter.Body.setAngle(this.body,-atan2(this.body.velocity.x,this.body.velocity.y)+radians(90))
  	

  	
  	
  
  }
 
  
    for(var p=0; p<staticArrows.length; p++){
    
    if(this.body.id===staticArrows[p].id){
    	push();
    	
    	rotate(-staticArrows[p].oldAngle)
    	
    	translate(-staticArrows[p].xOff,-staticArrows[p].yOff)
    	
    	rotate(staticArrows[p].angle)
    	
    	//console.log(degrees(staticArrows[p].angle))
    	
    	stroke(68,48,34)
    	
    	fill(85,60,42)
		
		rect(0,0,30,3);
		
		
		fill(230)
		stroke(230)
		push()
		
		translate(-15,-2)
		
		rotate(radians(20))
    	rect(0,0,10,3)
    	pop();
    	
    	push()
		
		translate(-15,2)
		
		rotate(radians(-20))
    	rect(0,0,10,3)
    	pop();
		
		scale(0.8)

		
		translate(15,6)
		
		stroke(68,48,34)
    	
    	fill(85,60,42)
    	
    	rotate(radians(-90));
    	
    	triangle(0, 0, 6, 15, 12, 0)
    	
    	
    	
    	pop();
    	
    
    }
    
    
    
    
    }
    
    pop();
    
   
  };
}