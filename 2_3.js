

function findNextSquare(num){
    let sqrNum = Math.sqrt(num);
    if( sqrNum % 1 !== 0  ){
        return -1;
    }
    else return ( (Math.floor(sqrNum)+1)**2);
}

console.log(findNextSquare(121) );
console.log(findNextSquare(625) );
console.log(findNextSquare(114) );

