

function minSum(arr){
    if(arr.length < 2){
        return -1;
    }
    let smallest = 0;
    let secSmallest = 0 ;
    if (arr[0] < arr[1]){
        smallest = arr[0];
        secSmallest = arr[1];
    }else{
        smallest = arr[1];
        secSmallest = arr[0];
    }

    for(let i=2; i < arr.length ; i++){
        if(arr[i] < smallest){
            secSmallest = smallest;
            smallest = arr[i];
        }else if(arr[i] < secSmallest) {
            secSmallest = arr[i];
        }
    }
    return secSmallest+smallest;
}

let arr1 = [19, 5, 42, 2, 77];
let arr2 = [10, 343445353, 3453445, 3453545353453];

console.log(minSum(arr1));
console.log(minSum(arr2));