
  function toWeirdCase (str) {
    let flag = true;
    let newStr = [];
    for(let i = 0; i < str.length ; i++){
        if(str[i] == ' '){
            flag = true;
            newStr[i] = str[i];
        }else{
            if(flag){
                newStr[i] = str[i].toUpperCase();
                flag = false;
            }else{
                newStr[i] = str[i].toLowerCase();
                flag = true;
            }
        }
    }
    return newStr.join('');
  }


 
  console.log( toWeirdCase(`Weird string case`) );