let bodyColor = document.getElementById("outer-box");

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
let div5 = document.getElementById("div5");

function colorChange(){

    div1.addEventListener("click",function(){
        bodyColor.style.backgroundColor = "red"
    })
    div2.addEventListener("click",function(){
        bodyColor.style.backgroundColor = "blue"
    })
    div3.addEventListener("click",function(){
        bodyColor.style.backgroundColor = "green"
    })
    div4.addEventListener("click",function(){
        bodyColor.style.backgroundColor = "black"
    })
    div5.addEventListener("click",function(){
        bodyColor.style.backgroundColor = "pink"
    })

}

colorChange();