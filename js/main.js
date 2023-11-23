//String in JS
console.log(typeof("Hi I'm vignesh"));
console.log("Hi im vignesh");
const myVar = "mathematic";
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
console.log(Number.isNaN("jj"));
console.log(isNaN("pp"));
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

/* let myData = confirm("are you fine?");
console.log(myData);
//prompt helps to get input from customer and then entered values will be thrown as output
let myD = prompt("enter your name:");
console.log(myD);
//If the customer cancelled without enter anything than the "??" acts as a check if the customers entered anything and if customer cancelled without entered anything then the values after this "??" will be thrown as output
let myH = prompt("enter your name");
console.log(myH ?? "you didn't enter the valid input");
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

    if (userChoice === undefined){
            playAgain = confirm("You didn't entered anything.  You want to play again?");

            if (playAgain === true) {
               location.reload();
            }
             else{
               alert('Okay. good day');
             }
    }
      
    else if (userChoice != undefined){
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
        else if (userChoice != "rock" || "paper" || "scissor"){
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
let myArray2 = ["vig","vin",23,45,67,67,8,90,88];
delete myArray2[0];
console.log(myArray2);
//we use splice instead of delete because it removes the element completely and leave no undefined element in the deleted place.
//myArray.splice('start position','how many element to delete','replace with this item')
myArray2.splice(1,1);
console.log(myArray2);
myArray2.splice(0,1,"hello everyone","hi");
console.log(myArray2);
//slice() method is used to get a copy of an array from particular element to particular element as you give as you want
//myArray.slice("start position","end position") note: it will give the end position's before element. you shall put this slice method in a new variable and store it then call it.
//reverse() method will reverse the entire array. you shall put this reverse() method in a new variable and store it then call it.
//join() method will get the entire array turned into a single string.
//split() method will split the string that you just made with join() method.
//myArray.split(",");
//by concat() you can add the 2 different array into a single array
myArrayA = ["mine","you", "I", 3,4];
newArray = myArray.concat(myArrayA);
console.log(newArray); 
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

//object
//object contains a key/properties and its value. we can give anything inside an object initialising with key.
//we can give object inside an object, function and whatever we want.
let myObj = {name:"vignesh",age:22,male:true};
let newObj = {
    name: "yuvarani",
    age: 24,
    obj: {
        name: "vignesh",
        age: 24
    },
    func: function(){
        return `my age is ${this.age}`
    }
}
console.log(myObj);
console.log(newObj.obj);//another way of calling properties inside an object is console.log(newObj["obj"]). note: we have to put quotation inside bracket
console.log(newObj["obj"]);
console.log(newObj.func());
//inherit object in another object. we have to call object and then create to assign already declared object in a new object.
let car = Object.create(newObj);
console.log(car.func());
//we can modify the old object's property  by calling new object
car.func= function(){
    return "vrooom"
};
console.log(car.func()); //NOTE: if you call old object and then its func it will give you the function value of old object.
//we can call object's every keys and object's every values by object.key and object.value method
console.log(Object.keys(newObj));
console.log(Object.values(newObj));
//we may use for-in loop to iterate the keys and values in object
let movie = {
    actor: "vijay",
    director: "lokesh",
    producer: "lalith",
    name: "leo"
}
for(let mi in movie){
    console.log(movie[mi]); //here it will iterate all the values in in movie object and prints you the value. "mi" is the keyword we declare and it should be anything.
}
for(let ey in movie){
    console.log(`${ey}, it's ${movie[ey]}`); //here you can see if you want the key alone you have to give the keyword key but you want the values you have to call the object and square bracket with keyword inside.
}
//delete particular property in an object
delete movie.producer;
console.log(movie);
console.log(movie.hasOwnProperty("producer")); //this hasOwnProperty method will give you the boolean of whether that given property is present in that particular object or not
//destructuring the object
 const {actor: myFav,director: myFavd} = movie; //we can create a variable by assigning the variable name next to the property and then give the object after the equal symbol.
console.log(myFav);
const{actor,director,producer} = movie; //we can either give new name to our variable or use the property itself as a variable name.
console.log(actor); 

//getting particular value inside an object
function myNewVari({actor}){ //by giving actor inside a curly bracket we can get the particular values of the given key
    return actor;
}
console.log(myNewVari(movie));

let myName= ["vignesh","yuvarani","pradhanya","virutha","vinothini","govind"];
console.log(myName[Math.floor(Math.random()*6)]);

function dream11(){
    let arrayA = ["Rohit Sharma (c)", "Shubman Gill", "Virat Kohli", "Shreyas Iyer", "KL Rahul (wk)", "Suryakumar Yadav", "Ravindra Jadeja", "Mohammed Shami", "Kuldeep Yadav", "Jasprit Bumrah", "Mohammed Siraj", "Devon Conway", "Rachin Ravindra", "Kane Williamson (c)", "Daryl Mitchell", "Glenn Phillips", "Tom Latham (wk)", "Mark Chapman", "Mitchell Santner", "Tim Southee", "Trent Boult", "Lockie Ferguson"]

    for(i=0;i<=1;i++){
        console.log(arrayA[Math.floor(Math.random()*22)]);
       
       
    }
}

dream11();

//classes
/* 
//this is how we declare object
 let myPizza = {
    size: "medium",
    flav: "margarita",
    bake: function(){
        return console.log(`please bake ${this.size} size, ${this.flav} pizza`);
    }
 }
myPizza.bake();

//class is like a template with which we can create numerous object within single step
class pizza {
       constructor(){
        this.size= "big";
        this.flav= "chicken";
       }
       bake(){ //in class template you don't have to mention function.
        return console.log(`please bake ${this.size} size, ${this.flav} pizza`);
       }
}
//this is how we create an object in single line using class template
const anotherPizza = new pizza();
//now we check if anotherPizza object created by calling the bake function
anotherPizza.bake(); //new object created successfully...
//if you want to add values to the properties. you can use this syntax
class pizzaa {
    constructor(size,flav){ //you can remember this in a way you remember function parameter
     this.size= size;
     this.flav= flav;
    }
    bake(){ //in class template you don't have to mention function.
     return console.log(`please bake ${this.size} size, ${this.flav} pizza`);
    }
}
const anotherPizzaB = new pizzaa("large","mushroom");
anotherPizzaB.bake(); */
//remember good class is when you don't give the values directly inside the template but via parameter.

//order pizza
//get and set method type-1
/* class pizza {
    constructor(size,type){
        this.size = size;
        this.type = type;
        this.toppings = "cheese";
    }
    get newToppings(){  //get and set method is used if we want to change the particular values we don't need to change directly instead we use this method and change the values with this function being called.
        return this.toppings;
    }
    set newToppings(newToppings){
        this.toppings = newToppings
    }
    bake(){
        return (`please bake ${this.size} size pizza with ${this.type} type with ${this.toppings} toppings`);
    }
}
newOrderPizza = new pizza("small","margaritta");
//newOrderPizza.toppings = "oil";//we can change the value by this method as we already know. but this is not a good method.
newOrderPizza.newToppings = "oil"; 
console.log(newOrderPizza.bake()); */

//get and set method type-2
/* class pizza {
    constructor(size,type){
        this.size = size;
        this.type = type;
        this.toppings = "cheese";
    }
    getToppings(){  //get and set method is used if we want to change the particular values we don't need to change directly instead we use this method and change the values with this function being called.here we name it self as getToppings method which is widely used and considered
        return this.toppings;
    }
    setToppings(newToppings){
        this.toppings = newToppings
    }
    bake(){
        return (`please bake ${this.size} size pizza with ${this.type} type with ${this.toppings} toppings`);
    }
}
newOrderPizza = new pizza("small","margaritta");
//newOrderPizza.toppings = "oil";//we can change the value by this method as we already know. but this is not a good method.
newOrderPizza.setToppings("oil");   //this another way of using get and set function.
console.log(newOrderPizza.bake()); */

//get and set method type-3
class pizza {
    constructor(size,type){
        this.size = size;
        this.type = type;
        this.toppings = []; //in some scenarios customer needs more toppings in that case we just let an empty array
    }
    getToppings(){  //get and set method is used if we want to change the particular values we don't need to change directly instead we use this method and change the values with this function being called.here we name it self as getToppings method which is widely used and considered
        return this.toppings;
    }
    setToppings(newToppings){
        this.toppings.push(newToppings); //we use push method so ifincase customer asked more than one topping we will add it to the end any number of time. 
    }
    bake(){
        return (`please bake ${this.size} size pizza with ${this.type} type with ${this.toppings} toppings`);
    }
}
newOrderPizza = new pizza("small","margaritta");
//newOrderPizza.toppings = "oil";//we can change the value by this method as we already know. but this is not a good method.
newOrderPizza.setToppings("oil");   //this another way of using get and set function.
newOrderPizza.setToppings("cheese");
console.log(newOrderPizza.bake());
console.log(newOrderPizza.getToppings()); //to see what is there

//understanding child class... 

class pizza1 {
    constructor(size){
        this.size = size;
    }

}

class pizza2 extends pizza1{ //creating child class with extends keyword
    constructor(size){
        super(size);
        this.flav = "juicy"
    }
    slice(){
        return `bake ${this.size} pizza with ${this.flav}`;
    }
}
const pizza3 = new pizza2("small"); //creating new pizza3 object with already created pizza 2 template
console.log(pizza3.slice());

//scope of private property - private property is called by #property which is helpful in scenarios where we don't want particular property to be called or changed with help of dot method for example mypizza.property()
//previously javascript never had dedicated method for private property and everyone used function to declare new object so that its object can't be called out of that function. but the drawback is we can't able to manipulate the properties values if we want.  so javascript come up with # method so we put # before the property name and hence it won't me called or manipulated outside the object.
class pizza11 {
    toppings = "cheese"
    #type = "margaritta"
    constructor(size){
        this.size = size;
    }
bake(){
    return `${this.toppings} pizza and ${this.#type} pizza and ${this.size}`
}
}
const pizza12 = new pizza11("large")
console.log(pizza12.bake());
console.log(pizza1.type); //it's private property so gives output as undefined.


//task - 1 - expiry date - 16-11-23 NOTE: code should be professional and easily readable
/* Enter first number: 10
Enter second number: 5
Choose operation (+, -, *, /): +
Result: 10 + 5 = 15 */

//task - 2 - expiry date - 18-11-23  NOTE: code should be professional and easily readable
//Build a simple to-do list application. Create functions to add tasks, remove tasks, and display all tasks in the list. Use arrays and functions to manage the list of tasks.
/* 1. Add Task
2. Remove Task
3. Show All Tasks
4. Exit

Enter your choice: 1
Enter task: Do laundry
Task added successfully!

Enter your choice: 3  NOTE: code should be professional and easily readable
Tasks:
1. Do laundry

Enter your choice: 2
Enter task number to remove: 1
Task removed successfully!

Enter your choice: 4 */

//task - 3 - expiry date - 20-11-2023
//Design a simple banking system. Create classes for accounts, including attributes like account number, balance, and account type. Implement methods for withdrawing, depositing, and transferring funds between accounts.

/* Account Menu:
1. Create Account
2. Withdraw
3. Deposit
4. Transfer
5. Check Balance
6. Exit

Enter your choice: 1
Enter account type (Savings/Checking): Savings
Account created successfully! Account Number: 12345

Enter your choice: 3
Enter account number: 12345
Enter amount to deposit: 500
$500 deposited successfully!

Enter your choice: 2
Enter account number: 12345
Enter amount to withdraw: 200
$200 withdrawn successfully!

Enter your choice: 4
Enter sender's account number: 12345
Enter receiver's account number: 67890
Enter amount to transfer: 100
$100 transferred successfully!

Enter your choice: 5
Enter account number: 12345
Balance: $200

Enter your choice: 6 */


//task - 4 - expiry date - 21/11/23 NOTE: code should be professional and easily readable
//Create a simplified online shopping system. Design classes for products, a shopping cart, and a user. Implement functionalities like adding products to the cart, removing products, calculating total cost, and checking out.

/* 1. View Products
2. Add to Cart
3. Remove from Cart
4. View Cart
5. Checkout
6. Exit

Enter your choice: 1
Products available:
1. Laptop ($800)
2. Headphones ($100)
3. Backpack ($50)

Enter your choice: 2
Enter product number to add: 1
Laptop added to cart successfully!

Enter your choice: 4
Items in Cart:
1. Laptop ($800)

Enter your choice: 3
Enter item number to remove: 1
Laptop removed from cart successfully!

Enter your choice: 5
Total cost: $0

Enter your choice: 6 */

//task - 5 - expiry date - 22/11/23 NOTE: code should be professional and easily readable
//Build a basic social media platform with user profiles, posts, and interactions. Implement functionalities like creating posts, following users, liking posts, and viewing a user's feed.

/* 1. Create User
2. Create Post
3. Follow User
4. View Feed
5. Like Post
6. Exit

Enter your choice: 1
Enter username: @Alice
User @Alice created successfully!

Enter your choice: 2
Enter your username: @Alice
Enter post content: Hello, world!
Post created successfully!

Enter your choice: 3
Enter your username: @Bob
@Alice followed @Bob successfully!

Enter your choice: 4
@Alice's Feed:
1. Hello, world! - by @Alice

Enter your choice: 5
Enter post number to like: 1
You liked the post by @Alice!

Enter your choice: 6 */


//JSON

//to convert data to JSON file
let myVar1 = {
    name: "vignesh",
    age: 25,
    obj: function(){
        console.log("hi how r u")
    }
}
let sendJSON = JSON.stringify(myVar1); //we converted our object data into JSON format to send it to server
console.log(sendJSON);

let getJSON = JSON.parse(sendJSON);
console.log(getJSON); //we converted json format data into object;

//error handling

// use "use strict"; mode get the js interpreter analyze and execute the code strictly as we know that javascript is not a strict language and it avoid throwing error on minor error.
//typeerror - it is one of js error where you try to manipulate variable that is declared by const
//referenceerror - reference error is the error that happens if we print a variable that are not initiated by let,var or const
//syntax error - it is popular error and can be addressed easily since javascript itself will throw this error.
//to handle these errors we use try and catch technique to catch minor error in our code

const newF = () => {
    try{         //try will get you the error in the code
        //const nama = "hello"
       // nama = "hi";

       // throw new customError("this is a custome error"); //we create exclusive error message using function 
        throw new error("this is custom error"); //this is short cut method wihout using exclusive functin for custom error throw
    }
    catch(err){  //catch will put the error inside parameter and you can print it with console

        console.log(errstack); //you can use console.error, console.warn amd console.table alternatively here

        //also console.log(err.name) or (err.stack) will fetch you different result in log

        //logTheError(err); //you can log the error so that the code runs asusually and the error will be set aside as you see whenever u want
    }finally{
        console.log("finally...") //this will directly execute if no error found in try and also it will execute even if the try has any error
    }
}
//newF();

/* function customError(message){
    this.message = message;
    this.name = "custom Error"
    this.stack = `${this.name}:${this.message}`
} */

//DOM - document object model - its a standard of how the provided document is structured and it excutes like a tree in dom.

const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);


const views = document.getElementsByClassName("view");
console.log(views);

const viewsall = document.querySelectorAll(".view");
console.log(viewsall);

const divs = view1.querySelectorAll("div");
console.log(divs);

const samedivs = view1.getElementsByTagName("div");
console.log(samedivs);

let evenDivs = view1.querySelectorAll("div:nth-of-type(2n)"); //it will fetch u the even divs of that particular element
console.log(evenDivs);

evenDivs[4].style.backgroundColor = "purple"; //this way you can style the desired div

for(i=0;i<evenDivs.length;i++){
    evenDivs[i].style.width = "150px";
}

const secText = document.querySelector("#view2 > div");  //here we are selecting particular element's text. note: it will get you only the content and not entire element with tags
secText.textContent = "hahaha"; //here we overwriting the text that already present in that particular div
console.log(secText);
const withTag = document.querySelector("nav");
withTag.innerHTML = "<h1>how r u</h1> <h1>im good</h1>"; //here with innerHTML method we replacing the entire element with tags
console.log(withTag);
withTag.style.display = "flex";
withTag.style.justifyContent = "space-evenly";

//console.log(evenDivs [0]); as we seen earlier that DOM is nothing but a tree structure. we can get the element or item we desired by moving back and forth.
//console.log (evenDivs [0].parentElement); //it will get us the parent child of evenDivs
console.log(evenDivs [0].parentElement.children); //it will get us the children of the parent child
//console.log(evenDivs [0].parentElement.childNodes); //it will give us all the content in parentelement
//console.log(evenDivs [0].parentElement.hasChildNodes ()); //it gives output in boolean whether evenDivs's parents has child or not
//console.log(evenDivs [0].parentElement.lastChild); //it will give last child
//console.log (evenDivs [0].parentElement.lastElementChild); //it will give last element

//play around this to know better
//console.log(evenDivs [0].parentElement.firstChild);
//console.log(evenDivs [0].parentElement.firstElementChild);
//console.log (evenDivs [0].nextSibling);
//console.log(evenDivs [0].nextElementSibling);
//console.log(evenDivs [0].nextElementSibling.nextElementSibling);
//console. log (evenDivs [0].previousSibling);
//console.log (evenDivs [0].previousElementSibling);

//view1.style.display = "none";
console.log(view1.lastElementChild);
//view1.lastElementChild.remove(); by this method we can remove particular element from html

function newDivC(){
    const newDiv = document.createElement("div")
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "blue";
newDiv.textContent = "hello";
newDiv.style.display = "flex";
newDiv.style.alignItems = "center";
newDiv.style.justifyContent = "center";
newDiv.style.color = "white";
newDiv.style.marginBottom = "10px";
view2.append(newDiv);
}
for(i=0;i<11;i++){
       newDivC();
}

//eventListener

const clickFun = () =>{
    alert("hello");
}
secText.addEventListener("click",clickFun,false);  //syntax - you have to give what event first then the function in which all the event had to happen and finally useCapture (true or false).

secText.addEventListener("click",function(event){
    console.log(event.target);
    event.target.textContent = "hehehe";
})

//eventBubblingUp
//propagation

//we are creating all the below const to understand what is eventbubblingup, propagation and useCapture
const sec1 = document.querySelector("#sec1");
const sec2 = sec1.querySelector("#sec2");
const sec3 = sec2.querySelector("#sec3");

sec1.style.height = "50vh";
sec1.style.width = "50vw";
//sec1.style.backgroundColor = "green"
sec1.style.display = "flex";
sec1.style.justifyContent = "center";
sec1.style.alignItems = "center";
sec2.style.display = "flex";
sec2.style.height = "250px";
sec2.style.width = "250px";
sec2.style.display = "flex";
sec2.style.justifyContent = "center";
sec2.style.alignItems = "center";
sec2.style.backgroundColor = "pink";
sec3.style.color = "black";

document.addEventListener("readystatechange",(event)=>{ //here ready state change is like a checker if the website result is completely got from the server and ready to show the output in a page. simply its a checker if the site is loaded successfully.
    if(event.target.readyState === "complete"){
        console.log("completed");
        initApp();
    }
})

const initApp = () => {
    sec1.addEventListener("click",(new1)=>{
        //new1.stopPropagation();
       //sec1.style.backgroundColor = "red";
       sec1.classList.add("green"); //here we using classList.add to add new class to that element and remove to remove already presented element and if we use classList.toggle instead of add and remove it will work like if we click it will change to older status and click again back to older status
       sec1.classList.remove("red");
       //sec1.classList.toggle("red");
       //sec1.classList.toggle("green");
    },true)
    sec2.addEventListener("click",()=>{
        sec2.style.backgroundColor = "yellow";
        
    },true)
    sec3.addEventListener("click",(new3)=>{
       //new3.stopPropagation();
       // sec3.textContent = "goosebumps";
       const myText = new3.target.textContent;
       myText === "1" ? (new3.target.textContent="goosebumps") : (new3.target.textContent = "1");

    },true)
}

//from the above code we should learn - 1. eventBubblingUp - which means if we directly click sec3 (which is child of sec2 and sec2 in turn child of sec1) the whole 3 condition inside the initApp function will executed and that is called eventBubbling up.  This is because sec 3 is the child of sec2 and sec1.  note: if we click sec1, then the first condition will only execute not other 2 because eventbubblingup only goes child to parent and not from parent to child.  2. propagation - as the name suggest it will propagate like what we see in eventbubbling. unlike eventbubbling, propagation does not have any condition and if we use stop propagation method, it will stop the propagation from either parent to child or child to parent(eventbubblingup). 3.  useCapture - it is opposite of eventbubblingup so it will propagate from parent to child. so what we can understand is overall we can use stop propagation to stop propagating the values chaning if we click just one element.  note: if we click sec1, then the first condition will only execute not other 2 because it is important to note here eventhough it goes from parent to child the propagation occurs only when u click the child element not when u click the parent element. 4. also if we use function parameter and use target like new1.target.backgroundColor then it will work like differently. play with it. it will also act like a eventbubbleup but within the element u clicking.

