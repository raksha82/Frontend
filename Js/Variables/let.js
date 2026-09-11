// & Let Variable
let a=40;
console.log(a); //40

// & Re-Initialization
a=50.78;
console.log(a); //50.78

// & Re-Declaration
// let a=67;
console.log(a); //SyntaxError: Identifier 'a' has already been declared


// & Re-Declaration in different block
function call(){
    let b=10;
    console.log(b); //10
}

let b=40;
call()
console.log(b); //40




