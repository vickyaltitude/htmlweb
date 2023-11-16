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