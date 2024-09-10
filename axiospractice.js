window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/40514a9711614783a14b8089f45f6bde/userDetails").
      then(res => {
        handleFormSubmit(res.data)
      })
  })
  function handleFormSubmit(data) {
    let lists = document.querySelector("ul")
    data.forEach(ele =>{
      let newli = document.createElement("li");
      let newp = document.createElement("p");
      let name = ele.name;
      let mail = ele.email;
      let phn = ele.phone;
      newp.innerText = name + " " + mail + " " + phn;
      newli.appendChild(newp)
      lists.appendChild(newli);
    })
  }