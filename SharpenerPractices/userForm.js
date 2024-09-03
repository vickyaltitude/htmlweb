let getForm = document.querySelector('form');
let body = document.querySelector('body');
let count = 0;
getForm.addEventListener('submit',function (event){
    count++
  event.preventDefault()
  let names = document.getElementById('username');
  let mail = document.getElementById('email');
  let phon = document.getElementById('phone');
  let userDetails = {
    id: count,
    name: names.value,
    email: mail.value,
    phone: phon.value
  }
  let pastDetails = JSON.parse(localStorage.getItem('User Details')) || [];
 
  pastDetails.push(userDetails);

  localStorage.setItem('User Details', JSON.stringify(pastDetails));
  
 let newLi = document.createElement('li');
 newLi.className = 'users'
 newLi.id = count.toString();
 let newBtn = document.createElement('button');
 newBtn.type = 'button';
 newBtn.innerText = 'Remove';
 newBtn.className = 'delete';
  let nameText = document.createTextNode(names.value);
  let mailText = document.createTextNode(" | " + mail.value);
  let phonText = document.createTextNode(" | " + phon.value);
  newLi.appendChild(nameText);
  newLi.appendChild(mailText);
  newLi.appendChild(phonText);
  newLi.appendChild(newBtn);
  body.appendChild(newLi)
  console.log(newLi);
})

body.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        let parent = event.target.parentElement;
        body.removeChild(parent);

        let getItems = localStorage.getItem('User Details');
        console.log("Retrieved Items:", getItems); 
        
            getItems = JSON.parse(getItems) || [];
        
        
        let ids = getItems.filter((elem) => {
        
            return elem.id != parent.id
        });

        console.log("Filtered IDs:", ids); 
        
        let setItems = JSON.stringify(ids);
        localStorage.setItem('User Details', setItems);

        console.log("Updated Items in LocalStorage:", setItems); 
    }
});