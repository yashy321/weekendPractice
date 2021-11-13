
function fibonacci(start , num){
    const a = [];
    if (start === 0 ){
        a[0] = start;
    }else a[0] =1;
    a[1] = 1;
    let sum = 0;
    for(let i = 2 ; i <= num ; i++ ){
        a[i] = a[i-1] + a[i-2];
    }
    return a[num];
}

console.log( fibonacci(0,5));
console.log( fibonacci(1,5));


