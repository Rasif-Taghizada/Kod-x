//! Event Listeners, classsList 
let heading = document.querySelector('h1');
//* Element-e class add etmek:
// heading.classList.add('salam');

//* Element-e class remove etmek: 
// heading.classList.remove('head')


//* Element-den classi replace etmek:
// console.log(heading.classList);
// heading.classList.replace('head','rasif')


//* Element-in classlarini contains etmek:
// let result = heading.classList.contains('head')

// console.log(result);

//! Event Listeners 
// let btn = document.querySelector('button');
// btn.addEventListener('mouseout', click)

// function click(){
//     heading.classList.toggle('head')
// }

// let input = document.querySelector('input');
// let btn = document.querySelector('button');
// input.addEventListener('keyup', (e) => {
//     console.log(e.target.value)
// })


// input.onkeyup = function(e){
// }

// function inputEvent(e){
//     console.log(e.value)
// }


// let obj = {
//     name: 'Rasif',
//     surname: 'Rzayev',
//     target: {
//         value: "dsfsjldfsfl"
//     }
// }
// console.log(obj.name)


//! Dropdown Menu:
let selectedMenu = document.querySelector('.menu-select')
let selectedMenuText = selectedMenu.querySelector('p')
let optionsMenu = document.querySelector('.menu-options')

selectedMenu.addEventListener('click', () => {
    optionsMenu.classList.toggle('active')

    let Items = optionsMenu.querySelectorAll('.option-item > p')
    Items.forEach((elem,index) => {
        elem.style = `--i: ${index + 1}`
        elem.addEventListener('click', () => {
            selectedMenu.innerText = elem.textContent;
            optionsMenu.classList.remove('active')
        })
    })
})



