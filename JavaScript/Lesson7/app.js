//! DOM -> Document Object Model
//! ELement-e catmaq: getElementById, getElementsByTagName, getElementsByClassName
// let head = document.getElementsByTagName('h1');
// let firstElement = document.getElementById('first');
// let elements = document.getElementsByClassName('element');
// console.log(elements)

//* Elementin daxilindeki textlere catmaq: textContent, innerText, innerHTML
// console.log(firstElement.textContent);
// firstElement.innerText = "<b>Salam</b>"
// firstElement.innerHTML = "<b>Salam</b>"

// console.log(firstElement.innerText);
// console.log(firstElement.innerHTML);


//! Element-lere catmaq: querySelector, querySelectorAll 

// let bodyElements = document.querySelectorAll("body > *:not(:last-child)")
// let body = document.querySelector('body');
// console.log(bodyElements)


// With class
// let element = document.querySelectorAll('.element')[1]; 
// console.log(element)


// with id
// let firstElement = document.querySelector('#first');
// console.log(firstElement)


//! ParentElement

// let child = document.querySelector("#lorem")
// console.log(child)
// console.log(child.parentElement)
// console.log(child.parentElement.parentElement)
// console.log(child.parentElement.parentElement.parentElement)


//! Children 
// let body = document.querySelector('body');
// console.log(body)
// console.log(body.children[4])
// console.log(body.children[4].children[1])
// console.log(body.children[4].children[1].previousElementSibling)


//! getElements vs querySelector
//* getElement -> return (array like to object)  -> HtmlCollection
//* querySelector -> array (butun metodlarini istifade edir)  -> NodeList


// let elements = document.querySelectorAll('.title');
// // let elements = document.getElementsByClassName('title');
// console.log(elements)

// elements.forEach((item, index, array) => {
//     // if(item.tagName == "SPAN"){
//     //     console.log(item)
//     // }
//     //! if - nin ozunu qisa sekilde yazmaq:
//     item.tagName == "SPAN" ? console.log(item) : console.log("Not span")
// })


//! Elementi yaratmaq 
let box = document.querySelector('.box');
let btn = document.createElement('button');
btn.textContent = "Click me";
console.log(btn);
btn.style.color = "red";
btn.style.fontWeight = "900"
box.appendChild(btn)

// console.log(box)