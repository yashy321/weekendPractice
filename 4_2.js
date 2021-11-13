
function tribonacci(start , num){
    const a = [];
    
    if (start === 0 ){
        a[0] = 0;
        a[1] = 0;
    }else {
        a[0] = 1;
        a[1] = 1;
    }
    if(num === 0){
        return a;
    }
    a[2] = 1;

    
    for(let i = 3 ; i <= num ; i++ ){
        a[i] = a[i-1] + a[i-2] + a[i-3];
    }
    return a[num];
}

console.log( tribonacci(0,5));
console.log( tribonacci(1,5));


