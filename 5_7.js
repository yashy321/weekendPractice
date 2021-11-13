function shortestWord(str){
    let arr = str.split(' ');
    let len = arr[0].length;
    
    for(let i = 1  ; i < arr.length ; i++){
        if(arr[i].length < len){
            len = arr[i].length ;
        }
    }
    return len;
}



console.log(shortestWord("bobd sfd sfsn on"));