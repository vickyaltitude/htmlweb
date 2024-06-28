let myDiv = document.getElementById('gett')
console.log(myDiv)

myDiv.style.fontSize = '50px';

let mytag = document.createElement('h1')

mytag.innerText = 'how are you';

myDiv.appendChild(mytag);

//let myPrompt = prompt('type something')

//console.log(myPrompt)

let myConfirm = confirm('are you male')
console.log(myConfirm)