//String in JS
console.log(typeof("Hi I'm vignesh"));
console.log("Hi im vignesh");
const myVar = "education";
console.log(myVar);
console.log(myVar.charAt(3));
console.log(myVar.length);
console.log(myVar.slice(2,3));
console.log(myVar.indexOf("at"));
console.log(myVar.split("t"));
console.log(myVar.toLowerCase());
console.log(myVar.toUpperCase());
console.log(myVar.includes("cat"));





//Numbers in JS

const myInt = 50;
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
//to fixed property will round off the number after point and remember it also will turn the value into string.
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
