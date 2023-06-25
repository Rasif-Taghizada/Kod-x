//! String Methods
let str = 'John Smith,John Smith,John Smith,John Smith'; 
//1. Trim() method
// console.log(str);
// console.log(str.trim());

//2.  replace() method
// let str2 = str.trim().replace("John", "Jack");
// console.log(str2)

//3. charAt() method
// let result = str.charAt(1);
// console.log(result);

// console.log(str[1]);
// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }

//4. startsWith() method
// let result = str.startsWith("J")
// console.log(result);


//5. endsWith() method

//6. includes() method 
// let result = str.includes("Sm")
// console.log(result);


//7. subString() method
// let result = str.substring(0);
// console.log(result);


//8. split() method
// let result = str.split("$",3)
// console.log(result);\

//9. concat() method
//  ... -> spread operator 
// let str2 = ",Rasif"
// let result = `${str}${str2}`
// console.log(result);

//10. replaceAll() method
// let result = str.replaceAll('John','Rasif')
// console.log(result);

// let result2 = str.replace('h','b')
// console.log(result2);



//! Date time methods
let date1 = new Date("June 25, 2023 21:30:50");
let now = new Date();
let difference = now - date1
let ms = 1000;
let sec = 60 * ms;
let min = 60 * ms;;
console.log(Math.floor(difference / min));


