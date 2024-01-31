exports.PrimeNumber=function(){
    let count=0;
    var primes=[];
    for(let i=2;i<=100;i++){
        for(let j=1;j<=i;j++){
            if(i%j==0){
                count++;
            }
        }
        if(count==2){
            primes.push(i);
        } 
        count=0;
    }
    return primes;
}