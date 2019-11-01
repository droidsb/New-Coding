var num=0;
var i=1;

var startTime = new Date();

var multis=20;

var solved=false;

while(solved===false){

var check=true;



for(var p=1; p<multis; p++){

	if(Number.isInteger(i/p)===false){
	
		check=false;
		
		
	
	}
	
}

if(check===true){


console.log(i)
solved=true;

var endTime = new Date();

var timeDiff = endTime - startTime; 
  timeDiff /= 1000;
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");

}



i=i+1;
}