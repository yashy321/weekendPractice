function mask(str){
    let arr = str.split('') ;
    for(let i = 0; i < str.length - 4 ; i++){
        arr[i] = '#';
    }
    return arr.join('');
}



console.log(mask("bobdsfdsfsnon"));