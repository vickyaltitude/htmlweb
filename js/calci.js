//task - 1 - expiry date - 16-11-23 NOTE: code should be professional and easily readable
/* Enter first number: 10
Enter second number: 5
Choose operation (+, -, *, /): +
Result: 10 + 5 = 15 */

function calculator(){
    //user wish
    let userInput = confirm("Do you want to use calculator?");

    //if user wish to use calculator

    if(userInput){

        //preferred operation

        let operation = Math.pareseInt(prompt("Please select the operation you wish to do!\n1. Want Addition\n2. Want Subtraction\n3. Want Multiplication\n4. Want Division"));

        //if user did not entered proper value

        function userNotEnteredProperValue(){
            if(operation === NaN){
            confirm("You didn't enter the correct operation's value. Please re-enter the value")
        }
    }

    }
    //if user denies to use calculator
    else{
        alert("Okay may be next time!");
    }
}