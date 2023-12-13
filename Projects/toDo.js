//getting the element by dom
const input = document.getElementById("inp");
const button = document.getElementById("btn");
const lists = document.getElementById("lists");
const box = document.getElementById("box");

//setting attribute for box element
box.setAttribute("id","box");

//creating function for the listeners
function toDo(){


    //starting listener with button in input field of box
    button.addEventListener("click",()=>{

        //checking if the input field is empty
       if(input.value != "" && input.value.split(" ").join("") != ""){

        
            
            //creating new buttons to place it with added lists
             const li = document.createElement("li");
             const edit = document.createElement("button");
             const del =   document.createElement("button");

             //setting attributes for the newly created buttons
             edit.setAttribute("id","edit");
             del.setAttribute("id","delete");

             //setting text content for the newly created buttons
             edit.textContent = "Edit";
             del.textContent = "Delete";
             
             //adding event listener for the created edit button
             edit.addEventListener("click",()=>{

                //making the list as input field when user clicks edit button
                const newValue = document.createElement("input")

                //removing edit and delete texts that comes up with input value
                let clearedVal = li.innerText.split("EditDelete");
                newValue.value = clearedVal[0];

                //removing existing lists inorder to put input field
                while (li.firstChild) {
                  li.removeChild(li.firstChild);
                }
        
                //appending the new input field with the text content captured in lists
                li.appendChild(newValue);

                //creating save button to save the changes
               const save = document.createElement("button");
               save.setAttribute("id","save");
               save.textContent = "Save";


               //appending the save button and delete button
               li.appendChild(save);
               li.appendChild(del);
        

     
                //creating listener for save button
               save.addEventListener("click", () => {


                  const editedValue = newValue.value;
                  const updatedText = document.createTextNode(editedValue); // Create a text node with the edited value
                  li.textContent = ''; // Clear the existing content of the list item

                  li.appendChild(updatedText); // Append the updated text content to the list item
                  li.appendChild(edit); // Add the edit button back if needed
                  li.appendChild(del); // Add the delete button back if needed
                });

                //creating event listener for delete button
                del.addEventListener("click",()=>{
                    lists.removeChild(li);
                 })
    
        
    },)

    

    li.textContent= input.value;
    li.appendChild(edit);
    li.appendChild(del);
    lists.appendChild(li);
    input.value = ""

    del.addEventListener("click",()=>{
        lists.removeChild(li);
     })
    }
    else if(input.value == ""){
        alert("Enter something to add to the list");
    }

  

})
}

toDo();

let myArr = ["vignesh","vicky",24,100]
sessionStorage.setItem("newvariable",JSON.stringify(myArr));
let getmyArr = JSON.parse(sessionStorage.getItem("newvariable"));
console.log(getmyArr);

