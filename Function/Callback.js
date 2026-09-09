// Callback Function

function addition(a,b,callback)
{
    console.log(a+b);
    callback(a,b);
}

function multiply(x,y)
{
    console.log(x*y);
}

addition(10,20,multiply)