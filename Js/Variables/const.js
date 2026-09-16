// * Const variable
const a=45.52;
console.log(a); //45.52

// * Re-Initialization
// a=50;
console.log(a); //TypeError: Assignment to constant variable.

// * Re-Declaration
// const a=56;
console.log(a); //SyntaxError: Identifier 'a' has already been declared

// *Re-Initialization in different block
function calling(){
    const c=50;
    console.log(c);  //50
}

c=45; 
calling();
console.log(c); //45

// * Re-Declaration in different block
{
    const r=90;
    console.log(r); //90
}
const r=80;
console.log(r); //80


