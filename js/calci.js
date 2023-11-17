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


        //if user entered proper value
        function userEnteredCorrectValue(){
            let operation = Number.parseInt(prompt("Please select the operation you wish to do!\n1. Want Addition\n2. Want Subtraction\n3. Want Multiplication\n4. Want Division"));
            if(isNaN(operation) === true){
                return reEnter();
            }
            else if(operation>4 || operation<1){
                    return reEnter();
                }
            let firstValue = Number.parseInt(prompt("Please enter the first value"));
            if(isNaN(firstValue) === true|| firstValue === undefined){
                return reEnter();
            }
            let secondValue = Number.parseInt(prompt("Please enter the second value"));
            if(isNaN(secondValue) === true || secondValue === undefined){
                return reEnter();
            }
            else if (operation === 1){
                alert(`First Value: ${firstValue}\n Second Value: ${secondValue} \n Result: ${firstValue + secondValue}`);
            }
            else if (operation === 2){
                alert(`First Value: ${firstValue}\n Second Value: ${secondValue} \n Result: ${firstValue - secondValue}`);
            }
            else if (operation === 3){
                alert(`First Value: ${firstValue}\n Second Value: ${secondValue} \n Result: ${firstValue * secondValue}`);
            }
            else if (operation  === 4){
                alert(`First Value: ${firstValue}\n Second Value: ${secondValue} \n Result: ${firstValue / secondValue}`);
            }
            return askAgain();
            
             //reEnter the values
        function reEnter(){
            let reenter = confirm("You didnot entered proper value!!! Want to use the calculator again?");
            if(reenter === true){
                return userEnteredCorrectValue();
            }
            else{
                alert("Okay see you next time");
            }
        }

         //ask whether user wish to use calculator again
         function askAgain(){
            let askAgain = confirm("Do you want to use the calculator once again?");
            if(askAgain === true){
             return userEnteredCorrectValue();
            }
            else{
             alert("Okay thanks for using our calculator");
            }
         }
        }

    return userEnteredCorrectValue();
    }
    //if user denies to use calculator
    else{
        alert("Okay may be next time!");
    }
}



