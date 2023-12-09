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
//callback function -


/* function func(a,b,callback){
    let c=a*b;
    callback(c);
}
function display(num){
    console.log(num);
}
func(4,5,display); */

//Define a function `processData` that takes two arguments: a number and a callback function. This function should call the callback function with the square of the number. Write another function `printResult` that takes a number and prints it. Demonstrate how to use `processData` with `printResult` as a callback.*/
function processedData(a,callBack){
   
    callBack(5);
}

processedData(8,function printResult(n){
    let c = n**2;
    console.log(c);
});

let arr= [23,34,50,60,70,35,37];

var i = 0;

while(i<arr.length){
    console.log(arr[i]);
    i++;
}


function reverseNumber(num) {
    let reversed = 0;
  
    while (num !== 0) {
      reversed = reversed * 10;
      reversed = reversed + num % 10;
      num = Math.floor(num / 10);
    }
  
    return reversed;
  }
  
  // Example usage:
  const number = 234234005;
  const reversedNumber = reverseNumber(number);
  console.log("Original number:", number);
  console.log("Reversed number:", reversedNumber);

 



  function star(num) {
    let stars = '';

    // Check if the number is positive
    if (num > 0) {
        // Append '*' to 'stars' 'num' times
        for (let i = 0; i < num; i++) {
            stars += '*';
        }
        console.log(stars);
    } else {
        console.log('Please provide a positive number.');
    }
}

star(5);

function isPalindrome(text){

    let reversed = '';
    for(i=text.length-1;i>=0;i--){
        reversed = reversed + text.charAt(i);
    }

    console.log(reversed);
}
isPalindrome("given");

function lastWord(word){
    var newWord = word.split(" ");
    var lastWord = newWord[newWord.length-1];
   
    for(i=newWord.length-1;i>=0;i--){
        if(newWord[i] !== ""){
            return newWord[i];
        }
    }
    return lastWord;
}
console.log(lastWord("hi   hello   everyone  fsdf  "));

//sum of all the multiples of 3 and 5 below 1000

function sum(num){
        let numA = 0;
        let numC = 0;

    for(i=0;i<num;i++){

            if(i%3===0){
                
                    numA = numA+i;
                
            }
            else if(i%5===0){
                
                    numC = numC + i;
               
            }       
    }

    return numA + numC;
    
}

console.log(sum(1000));




 
//sum of all the fibonacci below 1000

function sumEvenFibonacci(limit) {
    let sum = 0;
    let prev = 1;
    let curr = 1;

    while (curr < limit) {
        let next = prev + curr; //2 3 4 5 6
        prev = curr; //1 2 3 4 5
        curr = next; //2 3 4 5 6

        if (curr % 2 === 0 && curr < limit) {
            sum += curr; //2 6 12
        }
    }

    return sum;
}

const limit = 1000;
const result = sumEvenFibonacci(limit);
console.log(`The sum of even Fibonacci numbers below ${limit} is: ${result}`);

const button = document.getElementById("button");


button.addEventListener("click",()=>{
    heading.style.fontFamily = "sans-serif"
})

//num = 

function isPrime(num){

    let printPrime = [];

    if(num === 2){
        return `Given number ${num} is a prime number`;
    }

    for(i=2;i<num;i++){


        let prime = num%i;
       

        
        if (prime === 0){
            continue;
        }

        let printPrimeA = printPrime.push(i);

        
        console.log(printPrimeA);
    }

    
}

//isPrime(10);


//primefactors - print largest of the factor

function largestPrime(num) {
    let primeList = [];

    // Number below 2 is not a prime number
    if (num < 2) {
        return "Any number below 2 is not a prime number";
    }

    // Iterate all the way to num to fetch the prime numbers
    for (let i = 2; i < num; i++) {
        let isPrime = true;

        // Check for factors of i
        for (let j = 2; j < Math.sqrt(i) + 1; j++) {
            if (i % j === 0) {
                isPrime = false;
                break; // Break if i is divisible by any number other than 1 and itself
            }
        }

        // If i is a prime number, add it to the primeList array
        if (isPrime) {
            primeList.push(i);
        }
    }

    return primeList[primeList.length-1];
}

console.log(largestPrime(7000)); // Output: [2, 3, 5, 7, 11]

//understanding the question - the number should be in palindrome but should be the product of largest 3 digit numbers

function noonerize(number1,number2){
  
    let numArray = [];
    let numArray2= [];
    let numArrayEdit1 = [];
    let numArrayEdit2 = [];
    let finalArray = [];
    
    if(isNaN(number1) === true || number1 === undefined){
      return "The value you provided is not a number"
    }
    else if(isNaN(number2) === true || number2 === undefined){
    return "The value you provided is not a number"
      }
    
    else if(isNaN(number1) === false && isNaN(number2) === false){
      
      numArray.push(number1);
      numArray2.push(number2);
      
     let xyz1 = numArray.join();
      let xyz2 = numArray2.join();
      
      numArrayEdit1 = xyz1.slice(0,1);
      numArrayEdit2 = xyz2.slice(0,1);
      let numArrayEdit3 = xyz1.slice(1,xyz1.length);
     let  numArrayEdit4 = xyz2.slice(1,xyz2.length);

      let finalArray1 = numArrayEdit2 + numArrayEdit3;
      let finalArray2 = numArrayEdit1 + numArrayEdit4;

      
      finalArray.push(finalArray1);
      finalArray.push(finalArray2);
      console.log(Math.abs(Number.parseInt(finalArray1) - Number.parseInt(finalArray2)));
      return finalArray;
    
    }
  }

  console.log(noonerize(434,634));

  //exercice 1 from chatgpt

  //Find the sum of all multiples of 3 and 5 below a given number.


    function sumOfMultiples(num) {
        let sum = 0;
    
        for (let i = 3; i < num; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
    
        return `Sum of all multiples of 3 and 5 below ${num} is ${sum}`;
    }

    console.log(sumOfMultiples(30))

    //simple todo list
    const btn = document.getElementById("btn");
    const inpt = document.getElementById("input");
    const list = document.getElementById("list");
    const editMe = document.createElement("button")
          editMe.textContent = "Click me"
          
    

    btn.addEventListener("click",function(){
        const value = inpt.value;
        
        list.innerHTML = `${list.innerHTML}<li> ${value} <button>delete</button>${editMe}</li>`;
        
    })

    //object oriented programming language(oops)

    //any programming language to be considered as a oops supported language if it meets for condition
    //1. abstraction 2. encapsulation 3. inheritance 4. polymorphism

    //javascript was object based programming language before 2015 but after es6 came into picture js also considered as a oops supported language.

    //classes are generally present in oops and thats what make oops as a object oriented program
    //objects that are created by using class in oops
    //a language is clearly not an oops supported language if it does not has class.
    

