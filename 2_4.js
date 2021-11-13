function isUniq(arr){
    let num0 = arr[0];
    let num1 = arr[1]
    
    if( num0 !== num1 ){
        if( num0 === arr[2] ){ // case [1,2,1,1]
            return num1 ;
        }else return num0;
    }
    for(let i =2; i < arr.length ; i++){
        if(arr[i] !== num0){
            return arr[i];
        }
    }
}
console.log(isUniq([1, 1, 1, 2, 1, 1 ]));
console.log( isUniq([0,0,0.55, 0 ]));