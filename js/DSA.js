//KMP(Knut-Morris-Pratt) Algorithm - is used to get a substring index from the given string with time complexity O(n+m)

function kmp(str,sub){



}

console.log(kmp("ababacadabab","acad"))





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


//selection sort
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





//frequency counter method in algorithm
//since we used indexof method in below code it is considered as naive solution and hence it is not the best possible solution

/* function same(arr1,arr2){

    if(arr1.length != arr2.length){
        return false
    }
    let i=0;
    while(i<arr1.length){
        if(arr2.indexOf(arr1[i]*arr1[i]) != -1){
            arr2.splice(arr2.indexOf(arr1[i]*arr1[i]),1);
            if(!arr2.length){
                return true
            }
        }
        else if(arr2.indexOf(arr1[i]*arr1[i]) == -1){
            return false
        }
        i++
    }
}
console.log(same([1,2,3], [4,1,9])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false (must be same frequency) */

//here we use 3 seperated loops instead of using indexof method inside a for loop which leads to nested loop and quadratic situation
//hence the below is the best possible solution for the problem and hence its called frequency counter.
/* function same(arr1,arr2){
    let freq1 = {};
    let freq2 = {};

    for(let val of arr1){
        freq1[val] = (freq1[val] || 0) + 1;
    }
    for(let val of arr2){
        freq2[val] = (freq2[val] || 0) + 1;
    }
    for(let key in freq1){
        if(!(key*key) in freq2){
            return false
        }
        if(freq2[key*key] != freq1[key]){
            return false
        }
    }
    return true;

}
console.log(same([1,2,2,3], [4,1,9,4])) // true
console.log(same([1,2,3], [1,9])) // false
console.log(same([1,2,1], [4,4,1])) // false (must be same frequency) */


//now we see another problems that has the opportunity to solve with the help of frequency counter.

//check the given words are anagram

/* function validAnagram(str1,str2){
    let firstStr = {};
    let secondStr = {};
    for(let val of str1){
        firstStr[val] = (firstStr[val] ||0) +1    
    }
    for(let val of str2){
        secondStr[val] = (secondStr[val] ||0) +1    
    }

    for(let key in firstStr){
        if(!key in secondStr){
            return false
        }
        if(firstStr[key] != secondStr[key]){
            return false
        }
    }
    return true;
}

console.log(validAnagram ('', ''))// true
console.log(validAnagram ('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram( "rat", "car")) // false)
console.log(validAnagram( 'awesome', 'awesom')) // false
console.log(validAnagram ('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true */

//this is another best solution using two loops only.

function validAnagram (first, second) {
    if (first.length !== second. length) {
    return false;
    }
    const lookup = {};
    
    for (let i = 0;i< first. length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup [letter] ? lookup [letter] += 1 : lookup [letter] = 1;
    }
    for (let i = 0; i< second. length; i++) {
    let letter = second [i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup [letter]) {
    return false;
    } else {
    lookup [letter] -= 1;
    }
    }
    return true;
    }

console.log(validAnagram ('', ''))// true
console.log(validAnagram ('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram( "rat", "car")) // false)
console.log(validAnagram( 'awesome', 'awesom')) // false
console.log(validAnagram ('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true


//multiple pointer
//example - write a function called sumZero which accepts sorted array of integers. the function should find the firstpair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr,tar){
    let firstPointer = 0;
    let lastPointer = arr.length-1;

    while(firstPointer<lastPointer){
        if(arr[firstPointer]+arr[lastPointer]==tar){
            return [arr[firstPointer],arr[lastPointer]];
        }else if(arr[firstPointer]+arr[lastPointer]>tar){
            lastPointer--
        }else {
           
            firstPointer++
        }
    }

    return undefined;
}
console.log(sumZero ([-4,-3, -2,-1,0, 1,2,3,10],1)) // [-2,3]
console.log(sumZero ( [-2,0,1,3],5)) // undefined
console.log(sumZero ([1,2,3],3)) // undefined 


//Multiple pointers - Count unique values

/* Implement a function called countUniqueValues,
which accepts a sorted array, and counts the
unique values in the array. There can be negative
numbers in the array, but it will always be sorted. */

function countUniqueValues(arr){
    let firstPointer = 0;
    let secondPointer = 1;

    if(!arr.length){
        return 0
    }

    while(secondPointer<arr.length){
        if(arr[firstPointer] !== arr[secondPointer]){
            let second = arr[secondPointer]
            arr[firstPointer+1] = second;
            firstPointer++
        }
        else if(arr[firstPointer] == arr[secondPointer]){
            secondPointer++
        }
    }

    return firstPointer+1;
}


console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4

