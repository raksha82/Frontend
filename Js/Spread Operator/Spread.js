let arr1=[10,20,30];
let arr2=arr1;
console.log(arr1);
console.log(arr2);

arr2.push(40);
console.log(arr1); //10 , 20 , 30 , 40
console.log(arr2); //10 , 20 , 30 , 40


// Spread Operator
let ar1=[11,22,33,44];
let ar2=[...ar1];
console.log(ar1 , ar2); //[ 11, 22, 33, 44 ] [ 11, 22, 33, 44 ]

ar2.push(90);
console.log(ar1 , ar2);  // [ 11, 22, 33, 44 ] [ 11, 22, 33, 44, 90 ]