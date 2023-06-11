//!  Array methods:
//? 1. push() - add element to the end of array
let arr = [1, 2, 3, 4, true, "salam", [1, 2, 3], function () { console.log("hello") }];
// arr.push(20,30,40,50)
// console.log(arr);

//? 2. pop() - remove element from the end of array 
// let newItem = arr.pop()
// console.log(newItem);
// console.log(arr);

//? 3. shift() - remove element from the beginning of array
// let newItem = arr.shift()
// console.log(newItem);
// console.log(arr);

//? 4. unshift() - add element to the beginning of array
// let arr2 = [20,30,40,50]
// // spread operator -> ...
// arr.unshift(...arr2)
// console.log(arr);

//? 5. slice() - copy part of array 
// let newItem = arr.slice(2,5)   // 2 , 3 , 4 -cu indeksler
// console.log(newItem);
// console.log(arr);

//? 6. splice() - remove part of array
// let newArr = arr.splice(3,4);
// console.log(newArr);
// console.log(arr);

//? 7. forEach() - iterate over array
// for(let i = 0; i< arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(elem,indeks , originalMassiv){
//     console.log(originalMassiv);
// })

// arr.forEach((elem,index) => console.log(index))

//? 8. map() - iterate over array and return new array
// const numbers = [1,2,3,4,5]

// let newArr = numbers.map(function(item,index,array){
//     return item * 2
// })
// console.log(newArr);

//? 9. filter() - iterate over array and return new array with filtered elements 

// let newItems = arr.filter(function(elem,index,array){
//     if(typeof elem == "boolean"){
//         return true
//     }
// })
// [1,2,3,4]
// console.log(newItems);

//! Github Task1:
// const array_Clone = [1, 2, 4, 0];
// const newCloneArray = [...array_Clone];
// // array_Clone.forEach((elem) => {
// //     newCloneArray.push(elem);
// // })
// console.log(newCloneArray);

//! Github Task2: 
// let maxcount = 0; //5
// let maxCountElement;
// let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3]
// for(let i = 0; i < arr1.length; i++){
//     let counter = 0; // 5
//     for(let j = 0; j < arr1.length; j++){
//         if(arr1[i] == arr1[j]){
//             counter++;
//         }
//     }

//     if(counter > maxcount){
//         maxcount = counter; // 5
//         maxCountElement = arr1[i]; //'a'
//     }
// }

// console.log(maxcount);
// console.log(maxCountElement);

//! Github Task9:
// let str = "The Quick Brown Fox"; 
// let newStr = str.split("")  // string to array

// newStr.forEach((elem,index) => {
//     if(elem == elem.toLowerCase()){  // balacadir
//         newStr[index] = elem.toUpperCase()
//     }
//     else{  // boyukdur
//         newStr[index] = elem.toLowerCase()
//     }
// })
// console.log(newStr);


//? 10. find() - iterate over array and return first element that matches condition
//? 11. sort() - sort array
// let massiv = [10 , 30, 20 , 50 , 40]
// let massiv2 = ['d','b','a','f','z','g']
// arr1.sort(function(a,b){
//     return a - b
// });
// console.log(arr1);
//? 12. reverse() - reverse array 




//! Function Declaration
// function print(){
//     console.log("hello");
// }
// print()

//! Arrow Function
// let print = () => {
//     console.log("hello");
// }
