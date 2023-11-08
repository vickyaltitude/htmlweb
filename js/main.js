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
/* 
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
  */

//Rock, paper, scissor game!!

/* 
let userWish = confirm("Shall we play a game?");
if (userWish){
    let userChoice = prompt("Type rock, paper or scissor");
    const syStem = Math.floor(Math.random()*3 + 1);
    syStemChoice = syStem === 1 ? "rock"
    : syStem === 2 ? "paper"
    : syStem === 3 ? "scissor"
    : confirm("You did not entered the proper value. \n Play Again?")
      
    if (userChoice){
        if (userChoice.trim().toLowerCase() === syStemChoice){
            alert("Game tie!");
            playAgain = confirm("you want to play again?");

            if (playAgain === true) {
               location.reload();
            }
             else{
               alert('Thanks for playing');
             }
        }
        else if (userChoice.trim().toLowerCase() === "rock" && syStemChoice === "paper"){
            alert("User: rock\n System: paper\n Result: System wins");
            playAgain = confirm("you want to play again?");

            if (playAgain === true) {
               location.reload();
            }
             else{
               alert('Thanks for playing');
             }
        }
        else if (userChoice.trim().toLowerCase() === "paper" && syStemChoice === "rock"){
            alert("User: paper\n System: rock\n Result: User wins");
            playAgain = confirm("you want to play again?");

            if (playAgain === true) {
               location.reload();
            }
             else{
               alert('Thanks for playing');
             }
        }
        else if (userChoice.trim().toLowerCase() === "scissor" && syStemChoice === "paper"){
            alert("User: scissor\n System: paper\n Result: User wins");   
            playAgain = confirm("you want to play again?");

            if (playAgain === true) {
               location.reload();
            }
             else{
               alert('Thanks for playing');
             }
        }
        else if (userChoice.trim().toLowerCase() === "paper" && syStemChoice === "scissor"){
            alert("User: paper\n System: scissor\n Result: System wins"); 
            playAgain = confirm("you want to play again?");

            if (playAgain === true) {
               location.reload();
            }
             else{
               alert('Thanks for playing');
             }
        }
        else if (userChoice.trim().toLowerCase() === "scissor" && syStemChoice === "rock"){
            alert("User: scissor\n System: rock\n Result: System wins"); 
            playAgain = confirm("you want to play again?");

            if (playAgain === true) {
               location.reload();
            }
             else{
               alert('Thanks for playing');
             }
        }
        else if (userChoice.trim().toLowerCase() === "rock" && syStemChoice === "scissor"){
            alert("User: rock\n System: scissor\n Result: User wins"); 
            playAgain = confirm("you want to play again?");

            if (playAgain === true) {
               location.reload();
            }
             else{
               alert('Thanks for playing');
             }
        }
        else if (userChoice === "rock" || "paper" || "scissor"){
           uC = confirm("You have entered incorrect value!.\n Want to play again?");
            if (uC === true){
                location.reload();
            }
            else{
                alert("Okay Take care!");
            }
        }

        else{
            location.reload();
        }
    }
    else{
        alert("I think you changed your mind.  Anyways may be later!");
    }

}
else {
    alert("Okay! May be next time");
}

 */

//Loop

//while loop will execute the code until the given condition mets. here after entering the loop it prints 0 first then after entering the increment it adds 0 with 1 then again goes to the while loop and checks if 2 if smaller than given condition which is 10 then again prints the number 2 and so on.
let i = 0;
while (i<=10){
    console.log(i);
    i = i + 1; //i++or(i+=2) is shortcut for i = i+1 
}
//do is also same like while but it prints the value atleast once even if the condition breaks or not met. here after entering the do it first prints the l and then add l with increment 1 then entering the while and checks if 21 is smaller than 20 but its not then break occurs. the notable thing here is it executes the value once even the condition breaks after that.
 let l = 20;
do {
    console.log(l);
    l = l + 1; //i++ is shortcut for i = i+1
}while (l<20) 
//for loop is the one which we give the entire values inside the for conditin itself. there must be 3 ";" in which the conditin should present. we can also give values before or after like while loop but ; symbol should present.
/* let myNme = "vignesh"
for(let i=0;i<=myNme.length;i++;){
    console.log(myNme.charAt(i));
    i++;
} */
//other way of writing above code
let myNme = "vignesh"
for(let i=0;i<=myNme.length;){
    console.log(myNme.charAt(i));
    i++;
}

//Exercise - 1 : check whether the user eligible to vote

/* confirmC = confirm("Do you want to check whether are you eligble for vote?");
if(confirmC===true){
    userAge= prompt("Please enter your age")
    
     if (userAge){

        if (userAge>=18){
        alert("Congratulations! you are eligible for vote");
    }
        else if (userAge<=18){
       alert("Sorry, you are not eligible for vote");
       
    }
       else if (isNaN(userAge)){
       alert("oops! you didn't entered proper value");
    }
       else{
        alert("i love js");
       }
    }
    
else{
       alert("Okay you are going midway");
    }
     
}

else{
    alert("Fine May be next time!");
}
 */

//Exercise - 2: calculator

/*  invite = confirm("If you want to use a calculator?");
if (invite===true){
    choiceOf= prompt("Select the operation you want to do:\n 'add','subtract','multiply','divide'");
    if (choiceOf !== "add" && choiceOf !== "subtract"&&choiceOf !== "multiply"&& choiceOf !=="divide"){
        alert("You didn't enter the proper function");
    }
    else if(choiceOf === "add"||"subtract"||"multiply"||"divide"){
        firstValue = prompt("Please enter the first value");
        firV = Number.parseInt(firstValue);
        if(firV===true){
            alert("You didn't entered any value");
        }
        else if (!isNaN(firV)){
            secondValue = prompt("Please enter the second value");
            secV = Number.parseInt(secondValue);
            result = secV === true? alert("You didn't entered any value") : !isNaN(secV)  && choiceOf === "add"? alert(firV + secV) : !isNaN(secV) && choiceOf === "subtract" ? alert(firV - secV) : !isNaN(secV) && choiceOf === "multiply" ? alert(firV * secV) : !isNaN(secV) && choiceOf === "divide" ? alert(firV / secV) : alert("you cancelled this operation");
        }
        else{
            alert("you cancelled the operation")
        }
    }
    else{
        alert("You cancelled the operation");
    }
}
else{
    alert("Okay, may be next time!");
}
  */

//Exercise - 3 : guess the number

/* let start = confirm("Shall we play a guessing game between number 1 to 10");

if(start===true){

    let a = Math.floor(Math.random()*10) + 1;
    let b = parseInt(prompt("Guess the number between 1 to 10"));
    while (a!==b){
        if (isNaN(b)) {
            alert("Please enter a valid number.");
          }
        else if (b < 1 || b > 10) {
            alert("Your guess is out of range. Please guess between 1 and 10.");
          }
        else if (a>b){
            alert("Your guessed number is smaller than the result")
        }
        else if(a<b){
            alert("Your guessed number is bigger than the result");
        }
        b = parseInt(prompt("Guess the number again"));
}
        alert("Congrats you won the game");
}
else{
    alert("ok may be next time");
}
 */

//function

function letProperCase(userName){    //proper case means first letter caps and remaining small
    return userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase()
}

console.log(letProperCase("vignesh"));
console.log(letProperCase("yuvarani"));

//another way of declaring a function which is we can put it in a variable
let letProperCase1 = function (userName){    
    return userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase()
}

console.log(letProperCase1("vignesh"));
console.log(letProperCase1("yuvarani"));

//yet another way of declaring a function in which we can use => symbol instead of mentioning function
let letProperCase2 = (userName) => {    
    return userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase()
}

console.log(letProperCase2("vignesh"));
console.log(letProperCase2("yuvarani"));

//Array!!

let myArray = [];

myArray[0] = "vignesh";
myArray[1] = "yuvarani";
myArray[2] = 33;
myArray[3] = 20;
console.log(myArray);
console.log(myArray[1]);
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);  //it will fetch you the last value in the array, we using - 1 here because we know that length always counts from 1 so inorder to get last value we have to minus 1.

//shift() method will delete the first element in array
myArray.shift()
console.log(myArray);
//unshift() method will add a given element in the beginning of the array
myArray.unshift("hi")
console.log(myArray)
//pop() method will delete the last element in a given array
myArray.pop()
console.log(myArray)
//push() method will add the given element to the last of the array
myArray.push("hello")
console.log(myArray)
//NOTE : if we store unshift() and push() in a variable and call it then it will show the length of the whole array including new element added 
//NOTE : if we store shift() and pop() in a variable and call it then it will give us the particular element that we try to remove.
const lastItem = myArray.pop();
console.log(lastItem);
const firstItem = myArray.shift();
console.log(myArray)
console.log(firstItem);
//delete method is used to delete the particular element inside the array unlike other 4 mehtods we seen before which deletes or add the initial or last element. but its not commonly used because it will delete the element but leave the space as it is as undefined.
delete myArray[0];
console.log(myArray);
//we use splice instead of delete because it removes the element completely and leave no undefined element in the deleted place.
//myArray.splice('start position','how many element to delete','replace with this item')
myArray.splice(0,1);
console.log(myArray);
myArray.splice(0,0,"hello everyone");
console.log(myArray);
//slice() method is used to get a copy of an array from particular element to particular element as you given as you want
//myArray.slice("start position","end position") note: it will give the end position's before element. you shall put this slice method in a new variable and store it then call it.
//reverse() method will reverse the entire array. you shall put this slice method in a new variable and store it then call it.
//join() method will get the entire array turned into a single string.
//split() method will split the string that you just made with join() method.
//myArray.split(",");
//by concat() you can add the 2 different array into a single array
/* myArrayA = ["mine","you", "I", 3,4];
newArray = myArray.concat(myArrayA);
console.log(newArray); */
//another easy method to add two different array is called shelf method(...)
myArrayA = ["mine","you", "I", 3,4];
newArray = [...myArray,...myArrayA];
console.log(newArray);

//understanding 2 and 3 dimensional arrays

let myDetails = ["vignesh",24,"pondy","bscphyscis"]
let myAmbition = ["dev","fullstack","tech"]
let myFamily = ["vino", "mom", "dad", "simba", "tiger"]
let myArea = ["js", "react", "mongodb"]
let myHobby = ["cricket", "uno", "music"]

const myDandmyA = [myDetails,myAmbition,myFamily];  //we just made a 2 dimensional array by putting 2 single array as 1
console.log(myDandmyA[0][2]);  //here first condition [0] is we calling the first array as we already put it in myDandmyA variable and [2] condition is we calling the 2nd element in that particular array.
console.log(myDandmyA[1][2],myDandmyA[1][1]);  //here first condition [1] is we calling the second array as we already positioned it as second in myDandmyA variable and [2] condition is we calling the 2nd element in that particular array. we can continuosly any element we want by giving this condition and put comma between the condition.
const mine = [myDandmyA,myHobby]; //this is 3 dimensional as we put 2 different arrays and the first array is already a 2 dimensional hence after we putting that into a new array now the new array becomes 3 dimensional.
console.log(mine[0][2][0],mine[1][2]); //here first condition has 3 values [0] is first position array which is myDandmyA and [2] is second position in that myDandmyA variable and [0] is first element 1st element in myAmbition array.


//reworking stone, paper and scissor game without any bugs

let Game = (initializeGame) => {
    if (initializeGame) {
        let userChoice = prompt("Please enter your choice! \nrock, paper, or scissor?");
        let compChoice = ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)];
        if(userChoice === null){
            alert("You canceled the game. See you next time!");
            return;
        }
        userChoice = userChoice.toLowerCase();

          if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissor") {
            if (userChoice === compChoice) {
                alert(`Result\nYour choice: ${userChoice}\nComputer choice: ${compChoice}\nGAME TIE`);
            } else {
                let userWins = (
                    (userChoice === "rock" && compChoice === "scissor") ||
                    (userChoice === "scissor" && compChoice === "paper") ||
                    (userChoice === "paper" && compChoice === "rock")
                );

                if (userWins) {
                    alert(`Result\nYour choice: ${userChoice}\nComputer choice: ${compChoice}\nUSER WON`);
                    let playAgain = confirm("Do you want to play the game again?");
                    if (playAgain) {
                        location.reload();
                    } else {
                        alert("Okay, thanks for playing!");
                    }
                } else {
                    alert(`Result\nYour choice: ${userChoice}\nComputer choice: ${compChoice}\nCOMPUTER WON`);
                    let playAgain = confirm("Do you want to play the game again?");
                    if (playAgain) {
                        location.reload();
                    } else {
                        alert("Okay, thanks for playing!");
                    }
                }

            }
        } 
        
        
        else {
            let userExit = confirm("You didn't enter a valid value. Do you want to play again?");
            if (userExit) {
                location.reload();
            } else {
                alert("It's fine. See you next time!");
            }
        }
    } else {
        alert("Okay, maybe next time");
    }
};

//Game(confirm("Shall we play a game?\nRock, Paper & Scissor."));


//Reworking the calculator task with more code readability and for best coding practice


let calci = () =>{
    while(userWish){

    }
    //getting know userWish
    let 
}