let sureshUsers = document.getElementById("sureshUsers")
let deepankUsers = document.getElementById("DeepankUsers")
let abhikUsers = document.getElementById("abhikUsers")
let sUser;
let dUser;
let aUser;
let sId;
let dId;
let aId;
let scount = 0;
let dcount = 0;
let acount = 0;
document.addEventListener("DOMContentLoaded",()=>{
    axios.get("http://localhost:3500/posts")
    .then(res =>{
        sId = res.data[0].id;
        dId = res.data[1].id;
        aId = res.data[2].id;
        scount = res.data[0].total;
        dcount = res.data[1].total;
        acount = res.data[2].total;
        sUser = [...res.data[0].users]
        dUser = [...res.data[1].users]
        aUser = [...res.data[2].users]
       showData(res.data);
    })
})

function showData(datas){
    console.log(datas)
    let sureshCount = datas[0].total;
    let sureshTotal = document.getElementById("suresh-total");
    sureshTotal.innerText = `Total: ${sureshCount}`;
    let deepankCount = datas[1].total;
    let deepankTotal = document.getElementById("deepank-total");
    deepankTotal.innerText = `Total: ${deepankCount}`;
    let abhikCount = datas[2].total;
    let abhikTotal = document.getElementById("abhik-total");
    abhikTotal.innerText = `Total: ${abhikCount}`;
    let totalVotes = document.getElementById("total-votes");
    let totalV = Number(sureshCount) + Number(deepankCount) + Number(abhikCount);
    totalVotes.innerText = `Total Votes: ${totalV}`;
    if(datas[0].users){
       datas[0].users.forEach(ele=>{
          let newP = document.createElement("p");
          newP.innerHTML = `${ele}  <button class='btn btn-danger del'>Delete</button>`;
          sureshUsers.appendChild(newP);
       })
    }
    if(datas[1].users){
        datas[1].users.forEach(ele=>{
           let newP = document.createElement("p");
           newP.innerHTML = `${ele}  <button class='btn btn-danger del'>Delete</button>`;
           deepankUsers.appendChild(newP);
        })
     }
     if(datas[2].users){
        datas[2].users.forEach(ele=>{
           let newP = document.createElement("p");
           newP.innerHTML = `${ele}  <button class='btn btn-danger del'>Delete</button>`;
           abhikUsers.appendChild(newP);
        })
     }
}
document.getElementById('form').addEventListener("submit",(event)=>{
    event.preventDefault();

    let fixObj;
    let choosen = document.getElementById("names").value;
    let inpName = document.getElementById("inpname").value;
    let id;
    if(!inpName){
        alert("Please enter your name")
        return
    }
    if(choosen == "Suresh"){
        sUser.push(inpName)
        scount++;
        id = sId;
            fixObj = {
            "name": "suresh",
            "total": scount.toString(),
            "users": [...sUser]
        }
       
    }
    else if(choosen == "Deepank"){
        dUser.push(inpName)
        dcount++;
        id = dId;
            fixObj = {
            "name": "Deepank",
            "total": dcount.toString(),
            "users": [...dUser]
        }
       
    }
    else if(choosen == "Abhik"){
        aUser.push(inpName)
        acount++;
        id = aId;
            fixObj = {
            "name": "Abhik",
            "total": acount.toString(),
            "users": [...aUser]
        }
       
    }
    axios.put(`http://localhost:3500/posts/${id}`,fixObj)
    .then(res =>{
        updateUI(choosen,inpName)
        inpName = '';
        let deletes = document.getElementsByClassName('del')

for (let i = 0; i < deletes.length; i++) {
    deletes[i].addEventListener("click", function(event) {
        let getId = this.parentElement.id;
        console.log(getId);
    });
}
    }).catch(err => console.log(err))
   
})

function updateUI(candidate, userName) {
    let userCount, userList, totalElement;

    if (candidate === "Suresh") {
        userCount = scount;
        userList = sureshUsers;
        totalElement = document.getElementById("suresh-total");
    } else if (candidate === "Deepank") {
        userCount = dcount;
        userList = deepankUsers;
        totalElement = document.getElementById("deepank-total");
    } else if (candidate === "Abhik") {
        userCount = acount;
        userList = abhikUsers;
        totalElement = document.getElementById("abhik-total");
    }

    totalElement.innerText = `Total: ${userCount}`;

    let newP = document.createElement("p");
    let newB = document.createElement("button");
    newB.innerText = "Delete"
    newB.type = "click";
    newB.className = "btn btn-danger del";
    newP.innerText = `${userName}   `;
    newP.appendChild(newB)
    userList.appendChild(newP);

    let totalVotes = document.getElementById("total-votes");
    let totalV = Number(scount) + Number(dcount) + Number(acount);
    totalVotes.innerText = `Total Votes: ${totalV}`;
}
