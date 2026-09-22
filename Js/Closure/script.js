function outer()
{
    let count=0;
    console.log("Outer");

    function inner()
    {
        count++;
        console.log(count);
    }

    inner();
    inner();
    inner();
    inner();
}

outer();



function outerFunction()
{
    let i=0;

    function innerFunction() 
       {
            console.log(++i);
        }

    return innerFunction;
        
 }



let result=outerFunction();
result();
result();