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