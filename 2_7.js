
function basicMath(operator, val1, val2){
   return eval( val1.toString() + operator + val2.toString() );
}

console.log(basicMath('+',2,3));
console.log(basicMath('-',4,1));
console.log(basicMath('*', 2,5));




