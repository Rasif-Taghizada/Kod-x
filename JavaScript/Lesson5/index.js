
//! Functions:
//? 1. Function Declaration 
// sayHello();
// function sayHello() {
//     console.log('Hello everyone!');
// }
//! Hoisting mentiqi: 
// function declarationlar, var(acar sozunde)
// var a = 5;
// var a = 20;
// console.log(a)

//? 2. Function Expression
// showMessage()
// const showMessage = function () {
//     console.log('Hello everyone!');
// }

//? 3. Arrow Function
// const showMessage = (a,b) => console.log(a+b);
// showMessage(10,20)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// numbers.forEach( item => console.log(item))


//? 4. IIFE - Immediately Invoked Function Expression
// (
//     function sayHello(a) {
//         console.log(a);
//     }
// )(10)


//! Scope:
//? 1. Global Scope
// let a = 10;
// console.log(a)

//? 2. Block Scope
// let a = 30;
// if(true){
//     var b = 20;
//     console.log(b)
//     console.log(a)
// } 

// console.log(b)


//? 3. Functional Scope
// let a;
// showMessage()

// function showMessage() {
//     a = 20;
//     console.log(a)
// }

// console.log(a)


//! String Methods:
let str = 'Hello World!';
// console.log(str.length) 

//? 1. toUpperCase()
// console.log(str.toUpperCase())
// console.log(str)

//? 2. toLowerCase()
// console.log(str.toLowerCase())

//? 3. indexOf()
// let result = str.indexOf('o',5);
// console.log(str);
// console.log(result)

//?4. lastIndexOf()
// let result = str.lastIndexOf('o');
// console.log(str);
// console.log(result)

//?5. slice()
// let result = str.slice(6,11);
// console.log(str)
// console.log(result) 

//?6. split()
// let result = str.split(' ');
// console.log(str)
// console.log(result)
 