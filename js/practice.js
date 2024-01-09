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

console.log(returnUni([1,2,4,5,7,8,1,2,2],[2,5,7,8,8,9]));









