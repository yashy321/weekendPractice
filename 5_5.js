function initials(str){
    let arr = [2];
    arr[0] = str[0];
    arr[1] =str.split(' ')[1][0];
    console.log(arr[0].toUpperCase() + '.' + arr[1].toUpperCase() );

}



initials("bob non");