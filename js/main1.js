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

