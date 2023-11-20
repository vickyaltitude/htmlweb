//task - 1 - expiry date - 16-11-23 NOTE: code should be professional and easily readable
/* Enter first number: 10
Enter second number: 5
Choose operation (+, -, *, /): +
Result: 10 + 5 = 15 */

/* function calculator(){
    //user wish
    let userInput = confirm("Do you want to use calculator?");

    //if user wish to use calculator

    if(userInput){

        //preferred operation


        //if user entered proper value
        function userEnteredCorrectValue(){
            let operation = Number.parseInt(prompt("Please select the operation you wish to do!\n1. Want Addition\n2. Want Subtraction\n3. Want Multiplication\n4. Want Division"));
            if(isNaN(operation) === true){ //if user input is Nan
                return reEnter();
            }
            else if(operation>4 || operation<1){ //if user input is out of the given choices
                    return reEnter();
                }
            let firstValue = Number.parseInt(prompt("Please enter the first value")); //first value for the calculation
            if(isNaN(firstValue) === true|| firstValue === undefined){ //if second value in nan or undefined
                return reEnter();
            }
            let secondValue = Number.parseInt(prompt("Please enter the second value"));//second value for the calculation
            if(isNaN(secondValue) === true || secondValue === undefined){  //if second value in nan or undefined
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
} */



//task - 2 - expiry date - 18-11-23  NOTE: code should be professional and easily readable
//Build a simple to-do list application. Create functions to add tasks, remove tasks, and display all tasks in the list. Use arrays and functions to manage the list of tasks.
/* 1. Add Task
2. Remove Task
3. Show All Tasks
4. Exit

Enter your choice: 1
Enter task: Do laundry
Task added successfully!

Enter your choice: 3  
Tasks:
1. Do laundry

Enter your choice: 2
Enter task number to remove: 1
Task removed successfully!

Enter your choice: 4 */

/*user story - 

1. first step : display 

To Do List
1. Add Task
2. Remove Task
3. Show All Tasks
4. Exit
Enter your choice: 1

A1. if user gives any number as input --> display : belonged steps

   2.second step

   A1. display users step 1/2/3/4 results--> 
   display 
   step 1 --> Enter task: Add Task
                 --if user gives cancel here
                 --step -1 - you cancelled the operation. 
                 --Task added successfully
   step 2 -->  Enter task number to remove: 1 --> Task removed successfully
                 --if user gives cancel here
                 --step -1 - you cancelled the operation. 
                 --or  Task removed successfully
   step 3 --> Display list of tasks added till now
                 --if user gives cancel here
                 --step -1 - you cancelled the operation. 
                 --alert with existing lists
   step 4 --> Exits the Menu altogether.


A2. if user gives nan or undefined --> display : confirm - you entered incorrect value. hit ok to go back. cancel to exit
   
   3. third step
   display : confirm you entered incorrect value. hit ok to go back. cancel to exit
   --> if user hits ok goes back to step 1
   --> if user hits cancel . exit altogether

A3. if user gives cancel--> display : **exit the menu




*/

function toDoList(){

    //asking customer their preferred operation 
    const firstInter= prompt("To Do List\n1. Add Task\n 2. Remove Task\n 3. Show All Tasks\n 4. Exit\n Enter your choice: ")

    //calling the appropriate function based on user's input
    if(isNaN(Number.parseInt(firstInter)) === true || Number.parseInt(firstInter) === undefined || Number.parseInt(firstInter) === 0 || Number.parseInt(firstInter) > 4 || Number.parseInt(firstInter) <1){
        return invalidInput(); 
    }
    else if (Number.parseInt(firstInter) === 1){
        return addTask();
    }
    else if (Number.parseInt(firstInter) === 2){
        return removeTask();
    }
    else if (Number.parseInt(firstInter) === 3){
        return showAll();
    }
    else if (Number.parseInt(firstInter) === 4){
        alert("You exited the operation. Thank you");
        return;
    }

    //function to ask the customer if they wish to restart after entering incorrect value
    function invalidInput(){
        let userWish = confirm("you did not entered proper value or the mentioned operation!!!\n You wish to restart?")
        
        if (userWish === true){
            return toDoList();
        }

    }
    let toDoLists = [];
    let addedTask = toDoLists.push(addTask());
    let deletedTask = toDoLists.splice(removeTask()-1,removeTask()-1);
        toDoLists = [...addedTask,...deletedTask];

    //function if the customer entered 1 and want to add task
    function addTask(){
        let task = prompt("Please add enter the task you want to add:");
        if(task===undefined || task.trim()===undefined){
            let action = confirm("You didn't enter anything to add\n\nWant to restart?");
            if (action = true){
                return toDoList();
            }
            else{
                return;
            }
        }
        
        
    }

    //function if the customer want to remove any existing task
    function removeTask(){
       let rTask = Number.parseInt(prompt(`Please enter the task number to delete\n ${addedTask}`));
       if(isNaN(rTask)=== true || rTask === undefined ){
        let action = confirm("You didn't enter anything to add\n\nWant to restart?");
        if (action = true){
            return toDoList();
        }
        else{
            return;
        }
    }
       
    }

    //function to show the customer all existing task
    function showAll(){
        return alert(toDoLists);
    }
}

