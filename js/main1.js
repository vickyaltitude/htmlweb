/* function addition(){
    let firstChoice = 50;
    let secondChoice = 50;
    result = firstChoice + secondChoice;
    console.log(result);
}
addition();

function subtract(){
    let firstNum = 50;
    let secondNum = 50;
    result2 = firstNum - secondNum;
    console.log(result2);
}
subtract();
 */

/* function whetherCheckAlphabets(letter){
    if (letter=="a"){
        console.log(" A for Apple");
    }
    else if (letter=="b"){
        console.log(" B for Banana");
    }
    else if (letter=="c"){
        console.log(" c for Cat");
    }
    else{
        console.log("I don't know");
    }
}

whetherCheckAlphabets("a"); */

/* function FIZZFUZZ(fizzFuzz){
    if (fizzFuzz%3==0){
        console.log("Fizz")
    }
    else if (fizzFuzz%5==0){
        console.log("Fuzz");
    }
    else{
        console.log("FizzFuzz");
    }
}
FIZZFUZZ(46); */

function FIZZFUZZ(fizzFuzz){
    if (fizzFuzz%3==0){
        console.log("Fizz")
    }
    else if (fizzFuzz%5==0){
        console.log("buzz");
    }
    else if (fizzFuzz%5==0 && fizzFuzz%3==0){
        console.log("fizzbuzz");
    }
    else if (fizzFuzz%5==0 || fizzFuzz%3==0){
        console.log("buzz");
    }
    else{
        console.log("BuzzFizz");
    }
}
FIZZFUZZ(40); 

function lessOrGreat(num){
    if (num>0){
        console.log("Number is positive")
    }
    else if (num<0){
        console.log("number is negative");
    }
    else{
        console.log("number is zero");
    }
}
lessOrGreat(0);

function lessOrGreat(numa,numb){
   
    a = numa + numb
    b = numa - numb
    c = numa * numb
    d = numa / numb
    if (numa>numb){
        console.log("number 1 is greater than number 2")
    }
    else if (numa<numb){
        console.log("number 2 is greater than number 1");
    }
    else{
        console.log("both are equal");
    }
    console.log(a,b,c,d);

}
lessOrGreat(2,4);

for (let i=0;i<=100;i=i+2){
    console.log(i);
}
for (let i=0;i<=100;i=i+3){
    console.log(i);
}

function odd(){
    for (let i=0;i<=100;i=i+1){
        if(i%3===0){
            console.log(i);
        }
    }
    return
}
odd();

function even(){
    for (let i=0;i<=100;i=i+1){
        if(i%2===0){
            console.log(i);
        }
    }
    return
}
even();

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2;i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i)
    }
}

//question 1

function printEvenOrOdd(){
    for(i=0;i<=100;i++){
        if(i%2===0){
            console.log(i)
        }
        else if(i%2===1){
            continue;
        }
    }
}
printEvenOrOdd()


function isPrime(number){
    if (number<=1){
        return false;
    }
    for(i=2;i<number;i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
}


for(let i=2;i<=100;i++){
    if(isPrime(i)){
        console.log(i)
    }
}

console.log(Math.sqrt(5));

//Write a function that takes a number as input and prints all the even numbers from 1 to that number.

function printEven(num){
    for(i=0;i<=num;i++){
        if(i%2===0){
            console.log(i)
        }
    }
}
(printEven(30));

//Write a function that takes two numbers as input and returns the larger of the two numbers.
function whichIsGreater(a,b){
    if(a<b){
        console.log(`${b} is greater than ${a}`);
    }
    else if(a>b){
        console.log(`${a} is greater than ${b}`);
    }
}
whichIsGreater(3,45);

//Create an object to represent a student, with properties for the student's name, age, and grade. Write a function that takes the student object as input and prints the student's information.

let vignesh = {
    name: 'Vignesh',
    age: 24,
    grade: "A"
}
let yuvarani = {
    name: 'Yuvarani',
    age: 24,
    grade: "A"
}


//check whether received value string is palindrome or not
function checkPalindrome(value){
    let valueA = value.length;
    let valueB = value.charAt(0);
    if(valueA === value.length){
            if(valueB===value.charAt(value.length - 1) && value.charAt(1) === value.charAt(value.length - 2)){
                console.log("Given string is palindrome")
            }
            else{
                console.log("Given string is not a palindrome");
            }
        }
    else{
        console.log("given string is not a palindrome");
    }
}

checkPalindrome("tenet");

/*variable creation in javascript undergoes three steps
1. declaration - it will automatically takes up the space in memory when you just write var/let/const
2. initialization - it is the taken space are declared as undefined as default as if you are not given any value for your variable.
3. assignment - it will assign the value you given in the variable to the space it taken previously as undefined.

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

effects of hoisting
1. if we using var then declaration and initializing process both done simultaneously and hence if we call var variable before its declared it will show you just undefined and not throws error.
2. if we using let and const for declaring variable then declaration process alone happens and not initializing and not assignment and hence javascript will throws an error that variable can't shown before initialization.
*/

//var is functional scope. let and const are block scope
//it means var inside a curly bracket can accessed out side it but let and scope can't accessed outside curly bracket
//note var is not accessible outside if it is declared inside funciton.
//anything inside a curly bracket is local scope
//global

// gloabal variables
// Global variable is a variable which you can access in all the scopes ,it is accessible from anywhere in the code ,it is not restricted to any particular scope.
//var g=80;
//let c=9;
//const h=99;

// global variables should be defined at the top of the script such that they can be accessible from anywhere in your script
/*
var g=23;
let c=9;
const h=09;

function foo(){
  var g=5
  console.log(g);
  console.log(c);
  console.log(h);
}
foo();
*/


//let  vs var
// 1- let has a block scope ,var has a functional scope
// 2- variables declared with let donot get attached to global object(window in browser) but variables declared with var do
// 3 - let cannot be re declared in a same scope but var can 


//const vs var
// 1- const has a block scope ,var has a functional scope
// 2- variables declared with const donot get attached to global object(window in browser) but variables declared with var do
// 3 - const cannot re declared oin the same scope but var can 

var h=9;
var h=99;

let g=89;
//let g=78; //level scope can be accessed anywhere in the code and it is not restricted
