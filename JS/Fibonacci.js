var sum=0;
var Fib=2;
var FibLast=1;
var FibSave=0;
for (var i=0; i<4000; i++){
if(i%3===0 && Fib<4000000){	
	sum=sum+Fib;	
	console.log(Fib)	
	}
	FibSave=Fib;
	Fib=Fib+FibLast;	
	FibLast=FibSave;	
	FibSave=Fib;
}
console.log(sum);