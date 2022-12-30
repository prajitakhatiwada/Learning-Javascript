let x=9
let prime=true
for (let i=2; i<=x-1; i++){
    if (x%i==0){
       prime=false;
       break; 
    }
}
if(prime==true){
    console.log("The number is prime")
}
else {
    console.log("The number is not prime")
}