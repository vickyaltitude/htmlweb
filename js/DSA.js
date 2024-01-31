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

//sliding window
//write a function called maxSubarraySum which accepts an array of integers and a number called n.  the functin should calculate the maximum sum so n consecutive elements in the array.

function maxSubarraySum(arr,n){
    if(arr.length<n){ return null};
    let tempSum =0;
    let maxSum =0;
    for(i=0;i<n;i++){
        maxSum+= arr[i];
    }
    tempSum = maxSum; 
    for(j=n;j<arr.length;j++){
        tempSum= tempSum- arr[j-n] + arr[j]
        maxSum = Math.max(tempSum,maxSum);
    }
    
    return maxSum
}



console.log(maxSubarraySum( [1,2,5,2,8,1,5],2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)) // 17
console.log(maxSubarraySum( [4,2,1,6], 1)) // 6
console.log(maxSubarraySum( [4,2,1,6,2], 4)) // 13
console.log(maxSubarraySum([], 4)) // null

function sameFrequency(n,m){
    // good luck. Add any arguments you deem necessary.
    let checkOne = n.toString();
    let checkTwo = m.toString();
    let obj1 = {};
    let obj2 = {};
    let count = 1;
    if(checkOne.length != checkTwo.length){
        return false
    }
    for(let i=0;i<checkOne.length;i++){
       
        if(!obj1[checkOne[i]]){
            obj1[checkOne[i]] = count
        }else{
            obj1[checkOne[i]]++}
    }
    let count2 = 1;
    for(let j=0;j<checkTwo.length;j++){
       
        if(!obj2[checkTwo[j]]){
            obj2[checkTwo[j]] = count2
        }else {
            obj2[checkTwo[j]]++
    }
    }
    
    for(let key in obj1){
        if(key in obj2 == false){
            return false;
        }else if(obj1[key] != obj2[key]){
            return false
        }
    }
    return true;
  }
  /* console.log(sameFrequency(1111722,1221171)); //true
  console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false */

function isSubsequence(word,tar){
    let firstPointer = 0;
    let secondPointer =0;
    while(secondPointer<tar.length){
        if(word[firstPointer] == tar[secondPointer]){
            firstPointer++
        }
        if(firstPointer == word.length){
            return true
        }
        secondPointer++
    }

    return false
}

console.log(isSubsequence('hello', 'hlleo world')); // false
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

function maxSubarraySum(arr,tar){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length<tar){
    return null
    }
   let maxCheck = 0;
   let i=0
   while(i<tar){
       maxCheck+=arr[i];
       i++;
   }
   
   let firstSlider=tar;
   let checkSum = maxCheck;
   
   while(firstSlider<arr.length){
       
       checkSum = checkSum - arr[firstSlider-tar] + arr[firstSlider];
       maxCheck = Math.max(checkSum,maxCheck);
       firstSlider++
   }
   
   return maxCheck
  }
 
  
  console.log(maxSubarraySum([100,200,300,400], 2)) // 700
  console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
  console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
  console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
  console.log(maxSubarraySum([2,3], 3)) // null


  //Sliding Window - minSubArrayLen
/* Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead. */
  function minSubArrayLen(arr,n){
    let firstPointer=0;
    let secondPointer =0;
    let minArray = 0;
    let countCheck =0;
    let result = 0;
   
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=n){
            return 1
        }
    }
    while(secondPointer<arr.length-1){
        countCheck = countCheck + arr[secondPointer];
        minArray++
       
        if(countCheck>=n){
            countCheck = countCheck-arr[firstPointer];
           firstPointer++
           result = minArray;
        }
        
        if(secondPointer==arr.length-1){
            return result
        }
        secondPointer++
    }
    
    return 0
}

/* console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0 */
  


function binarySearch(arr,val){

    let firstP = 0;
    let lastP = arr.length-1

    while(firstP<=lastP){
        let mid = Math.floor((firstP + lastP)/2);
        if(arr[mid]==val){
            return mid
        }else if(arr[mid]>val){
            lastP = mid-1
        }else {
            firstP = mid+1
        }
    }
    return -1
}
console.log(binarySearch([1,2,3,4,5],2))
console.log(binarySearch([1,2,3,4,5],3))
console.log(binarySearch([1,2,3,4,5],5))
console.log(binarySearch([1,2,3,4,5],6))
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 10))
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 95))
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 100))


  //navie solution for searching the substring
  function searchSub(str,tar){
   

    for(let i=0;i<str.length;i++){
        if(str[i] == tar[0]){
           
            for(let j=0;j<tar.length;j++){  
                
            if(str[i+j] !== tar[j]){
                    break;
                }
              if(j == tar.length-1){
                return (i+j)-tar.length+1
               }
               
            }
        }
    }

    return "No match"
  }

  console.log(searchSub("lorie loled","lol"))

  //bubble sort

  function bubbleSort(arr){

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }

    return arr
  }

  console.log(bubbleSort([2,5,18,21,34,9,10]))

  //bubble sort slightly optimized

  function bubbleSortOpt(arr){

    for(let i=arr.length;i>0;i--){
        for(let j=0;j<i-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }

    return arr
  }

  console.log(bubbleSortOpt([2,5,18,21,34,9,10]))

  //bubblesort even more optimized

  function bubbleSortOptMo(arr){

    for(let i=arr.length;i>0;i--){
        let check = true
        for(let j=0;j<i-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
            check = false
        }
        if(check){
            break
        }
    }

    return arr
  }

  console.log(bubbleSortOptMo([2,5,18,21,34,9,10]))

    //bubblesort even more optimized with another method for swap

    function bubbleSortOptMoSwap(arr){

        for(let i=arr.length;i>0;i--){
            let swap = (arr1,idx1,idx2)=>{
                [arr1[idx1],arr1[idx2]] = [arr1[idx2],arr1[idx1]]
            }
            let check = true
            for(let j=0;j<i-1;j++){
                if(arr[j] > arr[j+1]){
                    swap(arr,j,j+1);
                }
                check = false
            }
            if(check){
                break
            }
        }
        return arr
      }
    
      console.log(bubbleSortOptMoSwap([2,5,18,21,34,9,10]))

//selection sort

function selection(arr){

    for(let i=0;i<arr.length;i++){
        let check = arr[i]
        for(let j=i+1;j<arr.length;j++){
            if(check>arr[j]){
                console.log(i,j)
                check = arr[j]
                arr[j] = arr[i]
                arr[i] = check
            }
    }
}
return arr
}

console.log(selection([5,6,7,9,11,10]))

//selection sort with es6 swap method

function selectionWithS(arr){

    let swap = (arr1,idx,idx2)=>{
        [arr1[idx1],arr1[idx2]] = [arr1[idx2],arr1[idx1]];
    }

    for(let i=0;i<arr.length;i++){
        let check = arr[i]
        for(let j=i+1;j<arr.length;j++){
            if(check>arr[j]){
                console.log(i,j)
               // check = arr[j]
               // arr[j] = arr[i]
               // arr[i] = check
                swap(arr,arr[i],arr[j])
            }
    }
}
return arr
}

console.log(selection([5,6,7,9,11,10,19,2,1,0,15]))

//insertion sort

function insertionSort(arr){

    for(let i=1;i<arr.length;i++){
        let currentVal = arr[i];
        for(var j=i-1;j>=0 && arr[j]>currentVal;j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }
    return arr
}

console.log(insertionSort([2,1,9,76,5]))
console.log(insertionSort([55,19,9,7,5,4,18,24]))
console.log(insertionSort([10,1,9,7,5,-4,-2,0]))



    //1st iteration - [ 2, 1, 9, 76, 4 ]
    //2nd iteration - []

    //mergeSort

    function merge(arr1,arr2){
        let resultArr = [];
        let i=0;
        let j=0;
        while(i<arr1.length && j<arr2.length){
            if(arr1[i]>arr2[j]){
                resultArr.push(arr2[j])
                j++
            }else{
                resultArr.push(arr1[i])
                i++
            }
        }
        while(i<arr1.length){
            resultArr.push(arr1[i])
            i++
        }
        while(j<arr2.length){
            resultArr.push(arr2[j])
            j++
        }
        return resultArr;
    }

    function mergeSort(arr){
          if(arr.length==1){return arr}
          let mid = Math.floor(arr.length/2)
          let left =  mergeSort(arr.slice(0,mid));
          let right =  mergeSort(arr.slice(mid));
          return merge(left,right);

    }
//console.log(merge([2,5],[1,4]))
//console.log(merge([2,5,6,3,1,9],[15,11,13,0,9,4]))
console.log(mergeSort([2,5,6,3,1,9,15,11,13,0,9,4]))