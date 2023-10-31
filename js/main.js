//String in JS
console.log(typeof("Hi I'm vignesh"));
console.log("Hi im vignesh");
const myVar = "mathematics";
console.log(myVar);
console.log(myVar.charAt(3));
console.log(myVar.length);
console.log(myVar.slice(2,3));
console.log(myVar.indexOf("at"));
console.log(myVar.lastIndexOf("mat"));
console.log(myVar.split("t"));
console.log(myVar.toLowerCase());
console.log(myVar.toUpperCase());
console.log(myVar.includes("mat"));





//Numbers in JS

const myInt = 50;
const myTint = "50";
//some basic syntax
console.log(myInt === myTint);
console.log(myTint + 3);
console.log(Number(myTint));
//parseFloat property will turn the value in the variable into float
//We use number function because we handling with the numbers here
console.log(Number.parseFloat(myInt));
//isInteger property acts as the boolean and when used, it will show whether the given value is integer or not
console.log(Number.isInteger(45.5));
const myNu = 2345.9545;
const myNe = 1500;
console.log(myNu + myNe);
//if true where passed inside the number it will throw you 1 and 0 in case with false.
console.log(Number(true));
//parseInt is same as parseFloat
console.log(Number.parseInt(myNu));
//tofixed property will round off the number after point and remember it also will turn the value into string.
console.log(Number.parseFloat(myNu).toFixed(2));
//two types of isNaN Object is there
Number.isNaN();
isNaN();
//if you give number isnan it will check whether the is nan and will show true if it is not a num. note it will show false even if we give string as the value because we use number object and hence it will consider only number related values.
console.log(Number.isNaN(45));
// here just isnan is a global value so if we give string as the value it will show as true.
console.log(isNaN("hi"));


//Maths Method and Properties

//math is used for doing various maths operation in js. Here Pi gives you value of 3.14......
console.log(Math.PI);
//trunc is used for truncate the value and gives you just 3
console.log(Math.trunc(Math.PI));
//round method will round of the given value
console.log(Math.round(Math.PI));
//ceil method will round off to the next number no matter whats the number after point. here it will give 5
console.log(Math.ceil(4.4));
//floor method will round off to the same number no matter what the number after point. here it will give 4
console.log(Math.floor(4.8));
//pow represents power off, so we have to give the number first and the power next after the comma. here 10 to the power 3.
console.log(Math.pow(10,3));
//min method will give you the minimum value from the given values.
console.log(Math.min(2,33,456,7,55));
//max method will give you maximum value from the given values.
console.log(Math.max(99,43,54,6,3,2));
//random method will throw you some random number.
console.log(Math.random());
//target to generate some random between 0 to 10
console.log(Math.round(Math.random()*10));
//target to generate some random between 0 to 100
console.log(Math.round(Math.random()*100));
// PRACTICE - YOU HAVE TO GET RANDOM LETTER FROM THE DECLARED VARIABLE
const myVari = "vigneshyuvarani";
console.log(myVari.charAt(Math.floor(Math.random()*myVari.length)));


//If condition:

//below are the syntax for if.  we can use ${} to fetch the declared variable but important thing to note is we have to use backtick which is next to number 1 in keyboard.
let someone = "how are you?";
let myreply;
if(someone){
    myreply = `${someone} I'm fine bro`;
}
console.log(myreply);
// here we didn't give any values to some variable hence it giving us else output if we give values to some it will give us if output
let some;
let myrply;
if(some){
    myrply = `${some} I'm fine bro`;
}
else {
    myrply = `sorry I'm not fine`;
}
console.log(myrply);
//here we can understand that we also add two variable in single statement by giving '&&'.  Also we can add true or false for the statement to work based on boolean. Play on it. note: statement order is important because if the prior statement meets then code will show the output rightaway and won't read further statements.
let somex = true;
let stranger = "how u doing?";
let hacker = false;
let myrplyy;
if(hacker){
    myrply = `${somex} I'm fine bro`;
}
else if(stranger && somex){
    myrply = `yes I'm good`;
}
else if(stranger){
    myrply = `${stranger}yes I'm good`;
}
else {
    myrply = `sorry I'm not fine`;
}
console.log(myrply);
//Sample work. It is called nested if statement if we use the if condition within some statement.
let test = 50;
let ageBar =false;
let grade;

if (test>=90){
    grade = "Congrats! Distinction";
}
else if(test>=80){
    grade = "Good! Fist class";
}
else if (test>=70){
    grade = "Nice! Second class";
}
else if (test>=60){
    grade = "Not bad! Third class";
}
else{
    if(ageBar){
        grade = "Sorry your age is bar.  You can't reappear for the exam!";
    }
    else{
        grade = "Poor! Fail";
    }
    
}
console.log(grade)


//switch statement

//switch statement is kind of if statement but not widely used in javascript
switch (Math.round(Math.random()*4)){
    case 4:
    console.log("wrong");
    break;
    case 3:
        console.log("correct");
        break;
    default:
        console.log('no match'); 
}
//simple switch statement exercise
let me = "rock";
let computer = "scissor";

switch(computer){
    case computer === me:
        console.log("Tie");
        break; 
    case "scissor":
        if (computer ===  "scissor"){
            console.log("me wins");
        }
        else{
            console.log("computer wins");
        }
        break;
        default:
            console.log("tie");
}


//ternary operator - it is concise method for conditional statements like if / switch. it's syntax is condition ? itIt'sTrue : ifIt'sFalse. here ? acts as false and : acts as else. Note you can also use : on and so on like else if
let markss = 76;
grade = markss >= 90 ? "A" 
: markss >= 80 ? "B"
: markss >= 70 ? "c"
: "No grade"
console.log(grade);
//small exercise to understand the ternary operator better
let mee = "rock";
let computerr = "paper";
let Result = 
computerr === mee 
? "Tie"
: computerr === "scissor" && mee === "paper"
?"computer won"
: computerr === "paper" && mee === "rock"
? "computer won"
: computerr === "rock" && mee === "scissor"
? "computer won"
: "Me won"
console.log(Result);


//User Input

let myData = confirm("are you fine?");
console.log(myData);
//prompt helps to get input from customer and then entered values will be thrown as output
let myD = prompt("enter your name:");
console.log(myD);
//If the customer cancelled without enter anything than the "??" acts as a check if the customers entered anything and if customer cancelled without entered anything then the values after this "??" will be thrown as output
let myH = prompt("enter your name");
console.log(myH ?? "you didn't enter the valid input");
// here we used small logic to get output if customer entered nothing but give ok and cancelled the prompt.
let myY = prompt("Enter your name:");

    if (myY) {
        console.log(myY ?? "You didn't enter anything");
    }
    else{
        console.log("you didn't entered anything");
    }
 

//Rock, paper, scissor game!!


