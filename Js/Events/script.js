let button=document.getElementById("click");
let text=document.getElementById("text");

button.addEventListener("click" ,()=>{

    setTimeout(()=>{
    text.textContent="Hello , this is events";
    text.style.color="green";
    },2000)

});

button.addEventListener("click", function() {
    console.log("Second function");
});

button.addEventListener("mouseover",()=>{
    console.log(event);
})



