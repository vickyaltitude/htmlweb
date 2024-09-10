
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/40514a9711614783a14b8089f45f6bde/userDetails").
      then(res => {
        handleFormSubmits(res.data)
      })
  })
  function handleFormSubmits(data) {
    let lists = document.querySelector("ul")
    data.forEach(ele=>{
      let edit = document.createElement("button");
      edit.type = "click";
      edit.innerText = "Edit"
       edit.id = ele._id;
      let deleteBtn = document.createElement("button");
      deleteBtn.id = ele._id;
      deleteBtn.type = "click";
      deleteBtn.innerText = "Delete"
      let newli = document.createElement("li");
      let newp = document.createElement("p");
      let name = ele.name;
      let mail = ele.email;
      let phn = ele.phone;
      newp.innerText = name + "-" + mail + "-" + phn + "   ";
      newli.appendChild(newp)
      newp.appendChild(edit);
      newp.appendChild(deleteBtn)
      lists.appendChild(newli);
    })
  }
  document.addEventListener("click", function(event) {
    if (event.target.innerText === "Delete") {
        const id = event.target.id;

        axios.delete(`https://crudcrud.com/api/40514a9711614783a14b8089f45f6bde/userDetails/${id}`)
        .then(response => {
            const liElement = event.target.closest('li');
            liElement.remove();
        })
        .catch(error => {
            console.error("Error deleting the data", error);
        });
    }
   else if(event.target.innerText === "Edit"){
        let tempId = event.target.id;
        axios.get(`https://crudcrud.com/api/40514a9711614783a14b8089f45f6bde/userDetails/${tempId}`).
        then(res => {
        
                    let datas = res.data;
                    let userN = document.getElementById("username");
                    let userM = document.getElementById("email");
                    let userP = document.getElementById("phone");
                    userN.value = datas.name;
                    userM.value = datas.email;
                    userP.value = datas.phone;
                    axios.delete(`https://crudcrud.com/api/40514a9711614783a14b8089f45f6bde/userDetails/${tempId}`)
                    .then(response => {
                        const liElement = event.target.closest('li');
                        liElement.remove();
                    })
                    .catch(error => {
                        console.error("Error deleting the data", error);
                    });
                
           
        })
        
        
    }
});

document.querySelector('form').addEventListener("submit",function handleFormSubmit(event){
    let userN = document.getElementById("username");
    let userM = document.getElementById("email");
    let userP = document.getElementById("phone");
    userN.required = true;
    userM.required = true;
    userP.required = true;
    let senObj = {
        name: userN.value,
        email: userM.value,
        phone:userP.value
    }
    axios.post("https://crudcrud.com/api/40514a9711614783a14b8089f45f6bde/userDetails",senObj).
    then(res =>{
        handleFormSubmits(res.data)
    })
})