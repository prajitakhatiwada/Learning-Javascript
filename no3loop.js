for (let i=2; i<=1300; i++){
   let prime=true
   for (let j=2; j<i; j++){
    if(i%j==0){
        prime=false;
        break;
    }
   }
   if (prime==true){
    console.log(i)
   }
}