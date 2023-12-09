const input = document.getElementById("inp");
const button = document.getElementById("btn");
const lists = document.getElementById("lists");
const box = document.getElementById("box");
box.setAttribute("id","box");

button.addEventListener("click",()=>{
    if(input.value != "" && input.value.split(" ").join("") != ""){
    const li = document.createElement("li");
    const edit = document.createElement("button");
    edit.setAttribute("id","edit");
    edit.textContent = "Edit";
    const del =   document.createElement("button");
    del.setAttribute("id","delete");
    del.textContent = "Delete";

    edit.addEventListener("click",()=>{
        const newValue = document.createElement("input")
              newValue.value = li.innerText;


              while (li.firstChild) {
                li.removeChild(li.firstChild);
            }
        
            
            li.appendChild(newValue);
        const save = document.createElement("button");
        save.setAttribute("id","save");
        save.textContent = "Save";
        const del =   document.createElement("button");
        del.setAttribute("id","delete");
        del.textContent = "Delete";
        li.appendChild(save);
        li.appendChild(del);
        li.removeChild(edit);
        

    })

    

    li.textContent= input.value;
    li.appendChild(edit);
    li.appendChild(del);
    lists.appendChild(li);
    input.value = ""
    }
    else if(input.value == ""){
        alert("Enter something to add to the list");
    }

})