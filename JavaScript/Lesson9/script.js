const form = document.querySelector('form'),
    input = document.querySelector('input'),
    button = document.querySelector('button'),
    lists = document.querySelector('ul');

form.addEventListener('submit', submitForm)
let AllTodo = [];

window.onload = function () {
    let localStorageData = JSON.parse(localStorage.getItem('AllTodo')); // todoArray

    if (localStorageData) {
        localStorageData.forEach((item) => {
            createListItem(item)
        })
    }
}


function localData() {
    localStorage.setItem('AllTodo', JSON.stringify(AllTodo));
}

function submitForm(e) {
    e.preventDefault();
    if (input.value) {
        createListItem(input.value);
        input.value = '';
    }
    else {
        return null;
    }
    deleteListItem();
    localData();
}

function createListItem(text) {
    // Create list item
    const li = document.createElement('li'),
        a = document.createElement('a'),
        icon = document.createElement('i');

    // Icon add classes:
    icon.classList.add('fas', 'fa-trash-alt');
    a.textContent = text;
    li.appendChild(a);
    li.appendChild(icon);
    lists.appendChild(li);
    AllTodo.push(a.textContent);
}


function deleteListItem() {
    const listItemIcon = document.querySelectorAll('i');
    listItemIcon.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })
    })
}



// localStorage.setItem("ad","Rasif")
// localStorage.setItem("soyad","Taghizade")
// localStorage.clear()
// localStorage.removeItem('ad')
// console.log(typeof localStorage.getItem('soyad'))