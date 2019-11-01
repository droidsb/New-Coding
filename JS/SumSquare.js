var am=100;

var sumsq=0;
var sqsum=0;

for(var i=1; i<=am; i++){

	sumsq=sumsq+Math.pow(i,2);
	
	sqsum=sqsum+i;


}

console.log(Math.pow(sqsum,2)-sumsq)