//module - it is method if we want to import some functions that are in another js file. we are now going to import some functions from this js to main.js


export default function showI(){
    return "heloo everyone";
}

export const myVaria = function showA(){
    console.log("heloo ");
}

export const myVariab = function showB(){
    console.log("heloo00");
}

//export default showI(); //there must be atleast one function that needs to be set as default 
//export {myVaria,myVaria};