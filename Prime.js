//Check 13 is a prime number and Not

let N=13;
let count=0;
for(let i=1; i<=13; i++){
	if(N%i==0){
		count++ ;
	}
}
if(count=2){
	console.log(N,": is Prime Number");
}
else{
	comsole.log(N,": is not a Prime Number")
}