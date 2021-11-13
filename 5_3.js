
function toCamelCase(str){
    str = str.replace(/-/g,' ');
    str = str.replace(/_/g, ' ');
    
    const str2arr = str.split(' ');
    let first = str2arr[0][0];
    const allFirstToUC = str2arr.map(word => word[0].toUpperCase() + word.substring(1) );
    
    
    return first + allFirstToUC.join('').substring(1);
}
console.log( toCamelCase("the-stealth-warrior") );
console.log( toCamelCase("The_Stealth_Warrior") );

