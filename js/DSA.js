//KMP(Knut-Morris-Pratt) Algorithm

function returnSubInd(str,tar){
   
    for(let i=0;i<str.length;i++){
        for(let j=0;j<tar.length;j++){
            if(str[i] == tar[j]){

               if(str[i] != tar[j] || j == tar.length-1){
                return [i-j,i]
               }
               i++
               continue
            }
            
        }
    }
    
    return "No matching str"
}

console.log(returnSubInd("javascript","script"))


let myOb = {vignesh: 22,place: "india"}

let myOb2 = myOb;

myOb2.vignesh = 25;
console.log(myOb);

let myArr= [1,2,3];
let myArr2 = myArr;
myArr2[1] = 24;
console.log(myArr);
console.log(this);





