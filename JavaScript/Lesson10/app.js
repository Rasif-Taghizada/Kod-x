// setTimeOut, setInterval, clearInterval, clearTimeout

// setTimeout
// let time1 = setTimeout(function() {
//   console.log('Hello World');  
// }, 1500)

// clearTimeout(time1)

// setInterval
// let btn = document.querySelector('button');
// let interval = setInterval(function () {
//     console.log('Hello World');
// }, 1000)

// btn.addEventListener('click', function () {
//     clearInterval(interval);
// })
// let box = document.querySelector('.box');

// setTimeout(function () {
//     box.classList.replace('square', 'circle');
//     setTimeout(function () {
//         box.classList.replace('circle', 'down');
//         setTimeout(function () {
//             box.classList.replace('down', 'right');
//             setTimeout(function () {
//                 box.classList.replace('right', 'down');
//                 setTimeout(function () {
//                     box.classList.replace('down', 'circle');
//                 } , 500)
//             }, 500)
//         }, 500)
//     },500)
// },1000)


// Promise, fetch
// let promise = new Promise((resolve, reject) => {
//     // resolve('Hello World')
//     reject('Error')
// })
// console.log(promise)

// Fetch
let body = document.querySelector('body');
let baseUrl = 'https://jsonplaceholder.typicode.com/users'; // API Key
fetch(baseUrl)
.then(data => data.json())
.then(res => {

    res.forEach((user) => {
        body.innerHTML += `
            <p>${user.name}</p>
        `
    });
    
    console.log(res);
})
.catch(err => console.error(err))



