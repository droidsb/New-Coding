var sum=0;
for (var i=0; i<1000; i++){
	if(Number.isInteger(i/3) || Number.isInteger(i/5)){
		sum=sum+i;
	}}
console.log(sum);