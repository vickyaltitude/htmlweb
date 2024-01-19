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

const myArr= [1,2,3];
const myArr2 = myArr;
myArr2[1] = 24;
console.log(myArr);
console.log(this);



let myArray = [1,2,3,4,5,6,7,8,9,10];

let myArray2 = myArray;

myArray2 = [];

console.log(myArray);

//input : 'javascript;
//output : 'tpircsavaj'

function reverseStr(str){

    let reversed = ""

    for(let i=str.length-1;i>=0;i--){
        
        reversed = reversed + str[i];
    }

    return reversed;

}

console.log(reverseStr("javascript"));



function uniqueEle(arr){


    let uniq = [];

    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
            uniq.push(arr[i]);
        }

    }

    

    return uniq;

}
console.log(uniqueEle([2,3,1,2,3]));

//checking substring from the given string
function checkSub(str,tar){


    for(i=0;i<=str.length-tar.length;i++){
      
            if(str.slice(i,tar.length+i) == tar){

                return i;

            }
    
    }

    return -1
}

console.log(checkSub("abababcd","abcd"));




let newStr = "Hello Hi there how are u? $23"
console.log(newStr.replace(/[^a-zA-Z0-9]/g,""));



//Given an unsorted array of integers, write a function that returns the minimum number of swaps required to sort the array using the selection sort algorithm.
//Example
//Input: [7, 5, 2, 6, 3]
//Output: 4

function selectionReq(arr){
    let count = 0;
 
    for(let i=0;i<arr.length;i++){
        let firstIt = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[firstIt] > arr[j]){
                firstIt = j
            }
           
           
        }
        let swap = arr[i]
            arr[i] = arr[firstIt];
            arr[firstIt] = swap;
            count+= 1;
       
    }
return arr;
}
 
console.log(selectionReq([7, 5, 2, 6, 3]));



















