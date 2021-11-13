
function bus_counter(str){
    let people = 0;
    for(let i = 0; i < str.length ; i++){
        people += str[i][0];
        people -= str[i][1];

    }
    return people;
}

let arr1 =[ [2,0 ], [5,1], [7,2] ];
let arr2 =[ [20,0 ], [50,10], [17,2] ];
console.log( bus_counter(arr1));
console.log( bus_counter( arr2));


