// Array

let fruits=["Apple","Mango","Pineapple","Guava"];
console.log(fruits);



// Creating array

const students=["Raksha" , "Rakshan" , "Ranjan" , "Varun"];
console.log(students);

// Accessing


console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango
console.log(fruits[2]); // Orange

// Modifying

fruits[3]="Banana";
console.log(fruits);

//Length
console.log(fruits.length);


// Hetro data
let data = ["Raksha", 23, true, 10.5, null];

console.log(data);


// Loops

// *for -- > iterates through an array using its index

for(let i=0;i<fruits.length;i++)
{
    console.log(i,fruits[i]);
}

// &for ... of --> loop directly iterates over the values of the array , we can't get the index here.

for(let values of fruits)
{
    console.log(values);
}