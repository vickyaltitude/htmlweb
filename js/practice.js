console.log(9);
/**
 * 
 string:
 trim
 charAt
 toUppercase
 toLowercase
 length
 indexOf
 lastIndexof
 slice
 split
 includes

 array:
 concat
 delete
 spread operator
 push
 unshift
 shift
 pop
 inludes
 indexOf
 lastIndexOf
 Array.isArr()
 splice
 slice
 toString
 join()
 reverse
 find
 findindexof
 forEach
 map
 reduce
 filter
 some
 every
 sort
 fill
 flat
 flatmap

 object:
 accessing keys and values
 creating new object
 accessing nested object

 class:
 creating class 
 creating object with class


 callback
 promises
 async await


 * 
 * 
*/

let myArr = [2,3,5,4,3,8,9];

myArr.fill(7,0,4);
console.log(myArr);
let myarr = [2,3,4,[7,4,3,[2,2,3,4,[8,9,10,10,[1,2,3,2,1,[0,8,7,6,5]]]]]]
myarr =myarr.flat(5);
console.log(myarr);

let check = myarr.some((num)=>{return num%2==0})
console.log(check);
console.log(myarr.sort((a,b)=>{return a-b}));

let finding = myarr.find(xe=>{return xe<5});
console.log(finding);

//this problem solve array chunk where it chunks the given array as per the second argument

function arrChunk(arr,tar){
    let getarr = [];
   
    for(let i=0;i<arr.length;i=i+tar){
        
        let newArr = arr.slice(i,tar+i);
        getarr.push(newArr);
    }

    return getarr;
}

console.log(arrChunk([5,4,7,6,1,2,3,4,9,10,12,34,2,4,5,4],5))

function convertToTitleCase(sentence){

    let eachW = sentence.split(" ");

    let newS = eachW.map((words)=>{
        return words[0].toUpperCase()+words.slice(1).toLowerCase();
    })

    return newS.join(" ")
}
console.log(convertToTitleCase("the book explainging dumbledoor"));




function checkUni(str){

    for(let i=0;i<str.length;i++){

        if(str.indexOf(str.charAt(i)) !== str.lastIndexOf(str.charAt(i))){
            return false
        }
    }

    return true;
}

console.log(checkUni("hello"));



function returnCommon(arr1,arr2){
    let newArr = []

    for(let i=0;i<arr1.length;i++){

        if(arr2.indexOf(arr1[i]) != -1 && newArr.indexOf(arr1[i]) == -1){
            newArr.push(arr1[i]);
        }
    }

    return newArr;
}

console.log(returnCommon([1,2,4,5,7,8,1,2,2],[2,5,7,8,8,9]));

var romanToInt = function(s) {
    let outputNum = 0;
    let objRoman = {I: 1, V: 5, X: 10, L:50, C:100, D: 500, M:1000}
    let splittedS = s.split("");
    let firstCheck = objRoman[splittedS[0]];
 
    for(let i=0;i<splittedS.length-1;){
            if(objRoman[splittedS[i]] >= objRoman[splittedS[i+1]]){
                if(objRoman[splittedS[i+1]] < objRoman[splittedS[i+2]]){
                    if(splittedS.length == 3){
                        outputNum = objRoman[splittedS[i]];
                    }
                    i++
                    continue;
                }

                let correctCheck = firstCheck + objRoman[splittedS[i+1]];
                outputNum = outputNum + correctCheck ;
                firstCheck = 0;
                i++;
            }
            else if(objRoman[splittedS[i]] < objRoman[splittedS[i+1]]){
                
                let putCheck = objRoman[splittedS[i+1]] - objRoman[splittedS[i]];
                outputNum = outputNum + putCheck;
                i++;
            }
    }
    return outputNum;
};
console.log(romanToInt("MCMXCIV"))

var romanToInt = function(s) {
    let outputNum = 0;
    let objRoman = {I: 1, V: 5, X: 10, L:50, C:100, D: 500, M:1000};
    let splittedS = s.split("");

    for(let i = 0; i < splittedS.length; i++) {
        if(objRoman[splittedS[i]] < objRoman[splittedS[i+1]]) {
            outputNum -= objRoman[splittedS[i]];
        } else {
            outputNum += objRoman[splittedS[i]];
        }
    }
    return outputNum;
};

console.log(romanToInt("MLXIV")); 



var longestCommonPrefix = function(strs) {
    let firstEle = strs[0].split("")
    if(strs.length == 1){
    return strs[0];
    }
    let preStr = "";
    for(i=0;i<firstEle.length;i++){
        for(j=1;j<strs.length;j++){
            if(firstEle[i] == strs[j][i]){
                if(j == strs.length-1){
                    preStr+= firstEle[i];
                }     
            } 
            else if(firstEle[i] !== strs[j][i]){
              return preStr;
            }
            else{break;} 
        }  
    }
    return preStr;
};


console.log(longestCommonPrefix(["flower","flow","floght"]));



function sumOfPrimes(n) {
    let sum = 0;
    let count = 0; 
    let num = 2;   

    while (count < n) {
        if (isPrime(num)) {
            sum += num;
            count++;
        }
        num++;
    }

    return sum;

    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }
}

console.log(sumOfPrimes(5));




function fibonacci(n){

    let newFib = [0,1];

    for(let i=2;i<n;i++){

        newFib[i]= newFib[i-1] + newFib[i-2] ;
    }

return newFib;
}

//console.log(fibonacci(n));


function factorial(n){
 let prod = 1;
 let i = n

 while(i>=1){
  
     prod = prod * i

    i--
 }

 return prod
}

console.log(factorial(1));


function returnPrime(n){
    if(n<2){
        return false
    }
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%i == 0){
            return false
        }
    }

    return true;
}
console.log(returnPrime(2));

function pof2(n){
   
    for(i=0;i<Math.sqrt(n);i++){
        if(Math.pow(2,i) == n){
            return true;
        }
    }
return false;
}

console.log(pof2(1));

function recursiveFibonacci(n){
    if(n<2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)

}

console.log(recursiveFibonacci(9));

function recursiveFactorial(n){
  
    if(n<2){
        return 1
    }
   
   return result = n * recursiveFactorial(n-1);;


    
}

console.log(recursiveFactorial(4))

function binarySearch(arr,tar){

    let right = arr.length-1;
    let left = 0;
    while(right >= left){
        let middleInd = Math.floor((right+left)/2);
        if(tar == arr[middleInd]){
            return middleInd;
        }
        else if(tar>arr[middleInd]){
            left = middleInd +1
        }else{
            right = middleInd -1
        }
    }
return -1;
}
//first it - left = 0,right = 13... second 'left = 7,right=13... third 'right = 9,left=7... fourth left=8,right=9, fifth 'left = 9,right=9

console.log(binarySearch([-5,-4,-2,0,3,4,5,6,7,8,9,10,20],8))

//Write a function findPalindromePairs that takes an array of words as input and returns all pairs of distinct indices (i, j) such that the concatenation of the two words at those indices is a palindrome. The function should return an array of arrays, where each inner array represents a valid pair of indices.
function findPalindromePairs(arr){
  let resultArr = []
  for(i=0;i<arr.length;i++){

    let intered = arr[i].split("").reverse().join("");

    arr.forEach((a,j)=>{
      if(intered==a){
        if(resultArr.indexOf([j,i]) == -1){
            resultArr.push([i,j])
        }
     
      }
    })
  }

  return resultArr
}
 




console.log(findPalindromePairs(["bat", "tab", "cat", "act", "god", "dog"]))


let arr2=[1,2,3,4,5,8,9]  

function BinarySearch(arr,ele){
    let start=0;
    let end=arr.length-1;

   

        let mid=Math.floor((start+end)/2);
        
        
        if (ele>arr[mid]){
            start=mid+1;
    
        }else if(ele<arr[mid]) {
            end=mid-1;
    
        }else{
            return mid;
        }
 

return -1
}
console.log(BinarySearch(arr2,3))

function factorial(num){
if(num==1){return 1}
return num * factorial(num-1)
}
console.log(factorial(6))

//coin question

function coin(n,ans){
    if(n==0){
        console.log(ans)
        return;
    }
    coin(n-1,ans+"h")
    coin(n-1,ans+"t")

}

coin(3,"")

//coin(2,h)
//coin(1,hh)
//coin(0,hhh)