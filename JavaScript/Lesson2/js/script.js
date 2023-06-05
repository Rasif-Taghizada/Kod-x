//! loop:
//* for , while , do while , for of , for in 
// Task1: 1-den 10-a qeder olan reqemlerin hamisini cixart console-a
// for (let i = 0; i < 10; i++) {
//    if(i % 2 == 0){
//     console.log(i);
//    }
// }


// for of --> array
// const numbers = [1,2,3,4,5,7,9,10];
// console.log(typeof numbers)
// for(let i = 0; i<numbers.length; i++) {
//     console.log(numbers[i])
// }

//! Ikinci yol:
// for (let i in numbers) {
//     console.log(numbers[i]);
// } 


// for in --> object

// const user = {
//     name: "Rasif",
//     surName: "Taghizade",
//     age: 20
// }
// console.log(user["name"])


// const obj = {
//     0: "rasif",
//     1: "taghizade",
//     2: 20
// }
// console.log(obj[0])

// for (let i in user) {
//     console.log(user[i])
// }


// while loop:
// let num = 10;
// while (num>0){
//     console.log(num);
//     // num--;
//     num = num - 1;  //9; //8 ...
// }


// do while:

// let num = 0;
// do {
//     console.log(num)
//     ++num;
// } while (num <= 10);


//! switch case:
// let reqem = 51;
// switch (reqem) {
//     case 51:
//         console.log("50-den boyukdur!");
//         break;
//     case 49:
//         console.log("50-den kicikdir!");
// }


//! Task:
// let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];  // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627


//! Task2:  
let str2 = "don’t know why"; //"y"
// Example output: 
// “yes” 

// for (let i = 0; i < str2.length; i++) {
//     if (str2[i] == 'y') {
//         console.log("yes")
//         console.log(i)
//     }
// }

//! Task3:
// Iterate through all numbers from 1 to 45. Print the following:
// For multiples of 3 print “Fizz”
// For multiples of 5 print “Buzz”
// For multiples of 3 and 5 print “FizzBuzz” 

//! Task4:
// Given a number n Calculate the factorial of the number
// let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24

// let num = 5,            // 120   5! = 1 * 2 * 3 * 4 * 5
//     factorial = 1;
// for(let i = 1; i <= num; i++){
//     // factorial = factorial * i
//     factorial *= i;
// }
// console.log(factorial) // 


//! Task Ali:
// let arr_1 = [3, 5, 22, 7, 2, 45, 75, 89, 21, 2];
// let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

// let sum_1 = 0;
// for (let i = 0; i < arr_1.length; i++) {
//     sum_1 += arr_1[i];
// }
// console.log(sum_1);

// let sum_2 = 0;
// for (let i = 0; i < arr_2.length; i++) {
//     sum_2 += arr_2[i];
// }

// let totalSum = sum_1 + sum_2;
// console.log(totalSum);

