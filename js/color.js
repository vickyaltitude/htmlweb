let bodyColor = document.getElementById("outer-box");

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
let div5 = document.getElementById("div5");

function colorChange(){

    div1.addEventListener("click",function(){
        bodyColor.style.backgroundColor = "red"
    })
    div2.addEventListener("click",function(){
        bodyColor.style.backgroundColor = "blue"
    })
    div3.addEventListener("click",function(){
        bodyColor.style.backgroundColor = "green"
    })
    div4.addEventListener("click",function(){
        bodyColor.style.backgroundColor = "black"
    })
    div5.addEventListener("click",function(){
        bodyColor.style.backgroundColor = "pink"
    })

}

colorChange();

 //exercice 2 from chatgpt

     //sum of factorial in the given number

     function sumOfFactorial(n){
        let sum = 1;
        let finalResult = 0;

        for(i=n;i>0;i--){
            sum = sum * i;
        }
        sum = sum.toString();
        let result = 0;

        for(j=0;j<sum.length;j++){
            result = result + Number(sum[j]);
        }

       finalResult = result;

        return `Sum of all the factorial in the ${n} is ${finalResult}`;
     }

     console.log(sumOfFactorial(15));


     //exercise - 3 - chatgpt
     //Find the sum of the even-valued terms in the Fibonacci sequence whose values do not exceed a given limit.
     //fibonacci - 1,2,3,5,8,13,21,34,55,89....

     function sumOfAllEvenFibonacci(n){
        let firstValue = 0;
        let secondValue = 1;
        let nextValue = 0;
        let sum = 0;

        for(i=nextValue;nextValue<n;nextValue++){
            
            nextValue = firstValue + secondValue; 
            firstValue = secondValue; 
            secondValue = nextValue; 

            console.log(nextValue);
           
            if(nextValue%2 === 0 && nextValue<n){
                sum = sum + nextValue;
            }
        }
        console.log(sum);
     }

    sumOfAllEvenFibonacci(789);

    let calci = document.getElementById("inner-calculator");
    let first = calci[0];
    let second = calci[1];
    let third = calci[2];
    let fourth = calci[3];
    let fifth = calci[4];
    let sixth = calci[5];
    let seventh = calci[6];
    let eighth = calci[7];
    let ninth = calci[8];
    let tenth = calci[9];
    let eleventh = calci[10];
    let twelth = calci[11];
    let thirteen = calci[12];
    let fourteen = calci[13]
    let fifteen = calci[14];
    let sixteen = calci[15];


   

    let inst = 76586;
    let instnew = Number(inst.toString().split("").reverse().join(""));
    console.log(instnew);

    function largestPalindrome(m,n){
        let pali = 1 ;
        let pali2 = 1;
        let ndrome = 0;

        for(i=m;i<=n;i++){

            for(j=m;j<=n;j++){
                pali = i*j;
                pali2 = Number(pali.toString().split("").reverse().join(""))
                if(pali === pali2 && pali > ndrome){
                    ndrome = pali;
                }
            }
            
        }
        return ndrome;
        
    }

   console.log(largestPalindrome(10,99));

   console.log(10^2);

   let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count++;
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        count--;
        break;
  }

  if(count<=0){
    console.log(`${count} Hold`);
  } else if(count>0){
    console.log(`${count} Bet`);
  }
 
 
  // Only change code above this line
}




cc(2); cc(3); cc(7); cc('Q'); cc('A');

let holdBet = "Hold"
  if(count > 0){
    holdBet = "Bet"
  }

  //return count + " " + holdBet

  // Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  console.log(recordCollection[2468].tracks);
 recordCollection[5439].artist = "ABBA";
 console.log(recordCollection);
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if(id === Number){
      if(value === "" || undefined(value)){
        delete records[id].prop;
      }else if(prop != records[id].tracks && value != ""){
            records[id].prop = value;
      }else if(prop === records[id].tracks && value != ""){
        if(records[id].prop === undefined){
          records[id].tracks = [];
          records[id].tracks.push(value);
        }else if(records[id].prop != undefined){
          records[id].tracks.push(value);
        }
      }
    }
  
  
    console.log(records);
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');


