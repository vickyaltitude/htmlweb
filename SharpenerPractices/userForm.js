let getForm = document.querySelector('form');
let body = document.querySelector('body');
getForm.addEventListener('submit',function (event){
  event.preventDefault()
  let names = document.getElementById('username');
  let mail = document.getElementById('email');
  let phon = document.getElementById('phone');
  let userDetails = {
    name: names.value,
    email: mail.value,
    phone: phon.value
  }
  let pastDetails = localStorage.getItem('User Details');
    let stringifyIt = JSON.stringify(userDetails);
    if(pastDetails){
        var newDetails = [pastDetails,stringifyIt];
        localStorage.setItem('User Details',newDetails);
    } else{
        localStorage.setItem('User Details',stringifyIt);
    }
  
 let newP = document.createElement('li');
  let nameText = document.createTextNode(names.value);
  let mailText = document.createTextNode(" " + mail.value);
  let phonText = document.createTextNode(" " + phon.value);
  newP.appendChild(nameText);
  newP.appendChild(mailText);
  newP.appendChild(phonText);
  body.appendChild(newP)
})