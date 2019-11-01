var palindrome = 0;
var num=100;
var temps=[];
var tempn=0;
var checkarr=[];
var pass=true;
var num1=0;
var num2=0;
while(num<1000){
	for(var i=100; i<1000; i++){
		pass=true;
		tempn=num*i;
		tempn=JSON.stringify(tempn)
		temps=tempn.split("");
		for(var p=0; p<Math.round(temps.length); p++){
			if(temps[p]===temps[temps.length-(p+1)]){
				checkarr.push(true)
			}
			else{checkarr.push(false)}
		}
		for(var p=0; p<checkarr.length; p++){
			if(checkarr[p]===false){
				pass=false;
			}
		}
		checkarr=[];
		if(pass===true){
			if(num*i>palindrome){
				palindrome=num*i;
				num1=num;
				num2=i;
			}
		}
	}
	num=num+1;
}
console.log(palindrome)
console.log(num1)
console.log(num2)