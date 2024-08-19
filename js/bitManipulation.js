let a = 5;
let b = 7;
a = a ^ b
b = a ^ b
a= a ^ b

//check whether ith bit is set
let checkSet = (n,i) =>{

    if( ((n>>i) & 1)  != 0){
       return true
    }else{
    return false
    }
 }
 
 console.log(checkSet(13,1))


//set ith bit
 let setBit = (n,i)=>{

    return ((n | (1<<i)))
    
    }
    
    console.log(setBit(5,1))


    //clear ith bit
    let clearBit = (n,i) =>{
        return ((n & ~(1<<i)))
     
     }
     
     console.log(clearBit(13,2))
     
     //togglebit
     let toggleBit = (n,i)=>{
       return ((n ^ (1<<i)))
     }
     
     console.log(toggleBit(13,2))
     //remove the last set bit(rightmost)
     let removeLastSetBit = (n) =>{
     
       return ((n & (n-1)))
     }
     
     console.log(removeLastSetBit(31))

     const checkIfPowerOf2 = (n) =>{
        if((n & (n-1)) == 0){
        return true
        }
        return false
     }
     
     console.log(checkIfPowerOf2(10))

     const numberOfSetBit = (n) =>{
  
        let count = 0;
        
        while(n != 0){
           n =   (n & (n-1))
             count++
        }
      return count
      }
      
      console.log(numberOfSetBit(6))

      //how many flips needs to done to achieve the target number

let countFlipsfortarget = (n,t) =>{

    let ans = n ^ t
    
    let count = 0;
    
    while(ans != 0){
       ans =   (ans & (ans-1))
         count++
    }
  return count
    
    
  }
  console.log(countFlipsfortarget(3,4))

  //it will give you the possible combination from the given array in consecutive manner
let possibleArrcombination = (arr) => {

    let counts = Math.pow(2,arr.length)
    
    let outPutArr = [];
    
      for(let i = 0;i < counts;i++){
         let appe = [];
         for(let j = 0;j<arr.length;j++){
            if((i & (1<<j))){
                appe.push(arr[j])
            }
         }
         outPutArr.push(appe)
      }
 return outPutArr
 }
 
 console.log(possibleArrcombination([1,2,3]))

 //this code will find one unique element present in the given array
 let uniqueEle = (arr) =>{
    let outPut = 0
      for(let i = 0;i<arr.length;i++){
         outPut = (outPut ^ arr[i])
      }
 return outPut
 }
 
 console.log(uniqueEle([4,1,2,1,2]))

 //XOR of n in a given range

 const xorOfGiven = (n) =>{
    
    if(n % 4 == 1){
     return 1 
    }else if(n % 4 == 2){
    return n + 1
    } else if(n % 4 ==3){
      return 0
    }else{
    return n
    }

}

console.log(xorOfGiven(5))

 