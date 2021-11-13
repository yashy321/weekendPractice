
function century(year){
    let num = year % 100; 
    if(num === 0){
        return year / 100;
    }else return Math.floor( year / 100) + 1;
}

console.log(century(1705));
console.log(century (1900));
console.log(century (1601));
console.log(century (2000));



