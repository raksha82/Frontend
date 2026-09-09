// // Callback Function

// function addition(a,b,callback)
// {
//     console.log(a+b);
//     callback(a,b);
// }

// function multiply(x,y)
// {
//     console.log(x*y);
// }

// addition(10,20,multiply)



// Why calllback

function add(a,b,callback)
{
    console.log(a+b);
    callback(a,b,sub);
}

function sub(x,y,callback)
{
    console.log(x-y);
    callback(x,y,multiplication)
}

function multiplication(a,b)
{
    console.log(a*b);
}

add(50,2,sub);