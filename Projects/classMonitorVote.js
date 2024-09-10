let sureshUsers = document.getElementById("sureshUsers")
let deepankUsers = document.getElementById("DeepankUsers")
let abhikUsers = document.getElementById("suresh-total")
let sUser = [];
let dUser = [];
let aUser = [];
document.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/648b5ba3f0de43cbaa152332adf9b831/userDetails")
    .then(res =>{
       showData(res.data);
    })
})
let scount = 0;
let dcount = 0;
let acount = 0;
function showData(datas){
    let sureshCount = datas[0].total;
    let sureshTotal = document.getElementById("suresh-total");
    let sT = `Total: ${sureshCount}`
    sureshTotal.innerText = sT;
    let deepankCount = datas[1].total;
    let deepankTotal = document.getElementById("deepank-total");
    let dT = `Total: ${deepankCount}`
    deepankTotal.innerText = dT;
    let abhikCount = datas[2].total;
    let abhikTotal = document.getElementById("abhik-total");
    abhikTotal.textContent = `Total: ${abhikCount}`;
    let totalVotes = document.getElementById("total-votes");
    let totalV = Number(datas[0].total) + Number(datas[1].total) + Number(datas[2].total)
    totalVotes.innerText = `Total Votes: ${totalV}`;
    if(datas){
       datas[0].users.forEach(ele=>{
          let newP = document.createElement("p");
          let newBtn = document.createElement('button');
          newBtn.innerText = "Delete";
          newP.innerHTML = ele + "  " + newBtn;
          sureshUsers.appendChild(newP);
       })
    }
    if(datas[1].users){
        datas[1].users.forEach(ele=>{
           let newP = document.createElement("p");
           let newBtn = document.createElement('button');
           newBtn.innerText = "Delete";
           newP.innerHTML = ele + "  " + newBtn;
           deepankUsers.appendChild(newP);
        })
     }
     if(datas[2].users){
        datas[2].users.forEach(ele=>{
           let newP = document.createElement("p");
           let newBtn = document.createElement('button');
           newBtn.innerText = "Delete";
           newP.innerHTML = ele + "  " + "<button id='delete' class='btn btn-danger'>Delete</button>";
           abhikUsers.appendChild(newP);
        })
     }
}
document.getElementById('btn').addEventListener("click",(event)=>{
    event.preventDefault();
    let fixObj;
    let choosen = document.getElementById("names");
    if(choosen.value == "Suresh"){
        let inpName = document.getElementById("inpname");
        sUser.push(inpName.value)
        scount++
            fixObj = {
            "name": "suresh",
            "total": scount.toString(),
            "users": [...sUser]
        }
       
    }
    if(choosen.value == "Deepank"){
        let inpName = document.getElementById("inpname");
        dUser.push(inpName.value)
        dcount++
            fixObj = {
            "name": "Deepank",
            "total": dcount.toString(),
            "users": [...dUser]
        }
       
    }
    if(choosen.value == "Abhik"){
        let inpName = document.getElementById("inpname");
        aUser.push(inpName.value)
        acount++
            fixObj = {
            "name": "Abhik",
            "total": acount.toString(),
            "users": [...aUser]
        }
       
    }
    axios.put("https://crudcrud.com/api/648b5ba3f0de43cbaa152332adf9b831/userDetails",fixObj)
    .then(res =>{
        showData(res.data)
    })
})