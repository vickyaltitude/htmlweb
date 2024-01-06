function splitString(inp){
    let splittedArr = [];
    let string = "";
  
    for(i=0;i<=inp.length;i++){
  
      if(inp[i] == " " || i == inp.length){
        splittedArr.push(string);
        string = "";
        continue;
      }
      else if(inp[i] != " " || i == inp.length-1){
        string = string + inp[i];
      }
    }
    return splittedArr;
  }
  
  console.log(splitString("JSON stands for JavaScript Object Notation and DOM stand for Document Object Model"))

  let stringN = "hello hey   there   all how are   you   "
  console.log(stringN.trim())

  function checkCreditCard(str){

for(i=0;i<str.length-1;i++){
    if(str[i] == " "){
        continue;
    }
  
  }
  console.log(checkCreditCard("4532 7562 7962 4063"))