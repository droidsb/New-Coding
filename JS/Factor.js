var LFac=0;
var num=600851475143;
var prime=0;
var done=false;
var devisor=1;
var numsaves=[];
var primefac=[];
	while(done===false){
	devisor=devisor+1;
		if(Number.isInteger(num/devisor)){
			numsaves.push(num/devisor);
			primefac.push(Number(devisor));	
			num=(num/devisor);
			devisor=1;		
		}		
		if(num===devisor || num===1){		
		done=true;		
		}
	}
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
console.log(getMaxOfArray(primefac))