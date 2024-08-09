// interview question :- kis tarah se data ko memory me rakha jata he data ko Access kiya jata he
//                       is base per data type ka 2 tarah se categerization he (1)primitive datatype
//                       (2)Reference(Non primitive type)         
//  Javascript is a dynamically type language

//  Primitive type

// 7 types : String , Number , Boolean , null , undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);


//const bigNumber = 324567898765423456767998n


// Reference type (Non primitive type)

// Array , Objects , Functions



// (1) arrary
const heores = ["Shaktiman" , "nagraj" , "doga"];

//(2) Object

let myobj = {
    name : "Garv",
    age : 22
}

//(3) Functions

const myfunction = function(){
    console.log("Hello World");
    
}

console.log(typeof score);

console.log( typeof scoreValue);

console.log(typeof isLoggedIn);

console.log(typeof outsideTemp);

console.log( typeof userEmail);

console.log(typeof id);

console.log(typeof anotherId);

console.log(typeof heores);

console.log(typeof myobj);

console.log(typeof myfunction);

// link of Study
//https://262.ecma-international.org/5.1/#sec-11.4.3








