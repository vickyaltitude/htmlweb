let data = [];
let score = 0;
let questionInd = 0;
let btnStart = document.getElementById('str');
let container = document.getElementById('container');
btnStart.addEventListener('click',()=>{
     container.style.display = 'flex';
     btnStart.parentNode.removeChild(btnStart);
     
})
async function getData(){
    let getData = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
    let parseD = await getData.json(getData);
    
    for(let i = 0;i<parseD.results.length;i++){
        let choicesArr = [...parseD.results[i].incorrect_answers,parseD.results[i].correct_answer];
        choicesArr.sort();
       let myObj = {
           question: parseD.results[i].question,
           choices : choicesArr,
           answer : parseD.results[i].correct_answer
       }
       data.push(myObj);
    }
    setQuestUi()
}
getData()
function setQuestUi(){
    let questionF = document.getElementById("question");
    let quest = questionF.firstElementChild;
    quest.innerHTML = data[questionInd].question;
    let choicesEle = document.getElementsByClassName("opt");
    
    for(let i = 0;i<choicesEle.length;i++){
        choicesEle[i].innerHTML = data[questionInd].choices[i]
        choicesEle[i].addEventListener('click',selectOpt);
        choicesEle[i].classList.remove("answered");
            
        choicesEle[i].addEventListener('mouseover',()=>{
                if(!choicesEle[i].classList.contains("answered")){
                choicesEle[i].style.background = "linear-gradient(130deg,#373234 ,white)";
                choicesEle[i].style.color = "#fdfdfd";
                choicesEle[i].style.cursor = "pointer";
                }
            })
        
        choicesEle[i].addEventListener('mouseout', function() {
            if (!choicesEle[i].classList.contains("answered")) {
                choicesEle[i].style.background = "#DEDCD7";
                choicesEle[i].style.color = "#373234";
            }
        });
    }
}

function selectOpt(ev){
    let ans = document.createElement('p');
    ans.innerHTML = data[questionInd].answer;
    let choicesEle = document.getElementsByClassName("opt");
    for (let i = 0; i < choicesEle.length; i++) {
        choicesEle[i].classList.add("answered");
    }
      if(ev.target.textContent == ans.textContent){
         ev.target.style.background = "green";
         score+= 2;
      }else{
        ev.target.style.background = "red";
    for(let i = 0;i<choicesEle.length;i++){
       if( choicesEle[i].innerHTML == ans.textContent){
           choicesEle[i].style.background = "green"
       }
    }
      }
      let nextBtn = document.getElementById("next");
      nextBtn.style.display = 'block';
      let btn = nextBtn.firstElementChild;
      btn.addEventListener("click",showNext);
}
function showNext(){
   questionInd++;
   if(questionInd > 4){
    let questionF = document.getElementById("question");
    let quest = questionF.firstElementChild;
     quest.innerHTML = "Your Score : " + score;
     let firstOpt = document.getElementById("opt1");
     firstOpt.innerHTML = score == 2 ? "REMARKS: You got very less mark!! It's ok attend the test again" : score == 4 ? "REMARKS: Not bad!! Still you can do better.  Try again!" : score == 6 ? "REMARKS: Got average mark!! attend again and get better marks" : score == 8 ? "REMARKS: Good buddy!!  You are genius.." : score == 10 ? "REMARKS: You are genius!! Go conquer the world..." : "REMARKS: Very poor mark.. Please try again"
     document.getElementById("opt2").style.display = 'none';
     document.getElementById("opt3").style.display = 'none';
     document.getElementById("opt4").style.display = 'none';
     let nextBtn = document.getElementById("next");
      let btn = nextBtn.firstElementChild;
      btn.innerHTML = "Retake Test"
      btn.removeEventListener("click",showNext);
      btn.addEventListener("click",()=>{location.reload()})
   }
   let choicesEle = document.getElementsByClassName("opt");

   for(let i = 0;i<choicesEle.length;i++){
        choicesEle[i].style.background = "#DEDCD7"
        choicesEle[i].style.color = "#303030"

 }
   setQuestUi();
}