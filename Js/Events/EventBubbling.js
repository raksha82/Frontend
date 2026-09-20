let parent=document.getElementById("div");
let child=document.getElementById("button");

child.addEventListener("click",(event)=>
{
    console.log("Child Clicked");
    event.stopPropagation();
})

parent.addEventListener("click",()=>
{
    console.log("Parent Clicked");
})
