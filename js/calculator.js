const inp = document.getElementById("inp");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const sev = document.getElementById("sev");
const eig = document.getElementById("eig");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const de = document.getElementById("backs");
const erase = document.getElementById("clear");
const add = document.getElementById("add");
const mult = document.getElementById("mult");
const divide = document.getElementById("divide");
const minus = document.getElementById("minus");
const clear = document.getElementById("clear");
const equals = document.getElementById("equal");

equals.addEventListener("click",()=>{
    let result = eval(inp.value);
    inp.value = result;
})

de.addEventListener("click",()=>{
    inp.value = inp.value.slice(0, -1);
})
clear.addEventListener("click",()=>{
inp.value = "";
})
one.addEventListener("click",()=>{
    inp.value = inp.value + 1;
})
two.addEventListener("click",()=>{
    inp.value = inp.value + 2;
})
three.addEventListener("click",()=>{
    inp.value = inp.value + 3;
})
four.addEventListener("click",()=>{
    inp.value = inp.value + 4;
})
five.addEventListener("click",()=>{
    inp.value = inp.value + 5;
})
six.addEventListener("click",()=>{
    inp.value = inp.value + 6;
})
sev.addEventListener("click",()=>{
    inp.value = inp.value + 7;
})
eig.addEventListener("click",()=>{
    inp.value = inp.value + 8;
})
nine.addEventListener("click",()=>{
    inp.value = inp.value + 9;
})
zero.addEventListener("click",()=>{
    inp.value = inp.value + 0;
})
dot.addEventListener("click",()=>{
    inp.value = inp.value + ".";
})
add.addEventListener("click",()=>{
    inp.value = inp.value + "+";
})
divide.addEventListener("click",()=>{
    inp.value = inp.value + "/";
})
mult.addEventListener("click",()=>{
    inp.value = inp.value + "*";
})
minus.addEventListener("click",()=>{
    inp.value = inp.value + "-";
})
