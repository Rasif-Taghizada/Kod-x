const form = document.querySelector('form'),
    input = document.querySelector('input'),
    button = document.querySelector('button'),
    lists = document.querySelector('ul');

form.addEventListener('submit', submitForm);

let allTodos = [];

window.onload = function () {
    let localTodos = JSON.parse(localStorage.getItem("Todos"));
    console.log(localTodos)
    localTodos?.forEach((item) => {
        createListItem(item.todoText)
    })
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
    localStorage.setItem("Todos", JSON.stringify(allTodos))
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
    allTodos.push(
        {
            todoText: text,
            isDeleted: false
        }
    );
}


function deleteListItem() {
    const listItemIcon = document.querySelectorAll('i');
    listItemIcon.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })
    })
}

// localStorage.setItem("name", "Rasif")
// localStorage.setItem("age", "25")
// console.log(typeof localStorage.getItem("name"))
// localStorage.clear()
// localStorage.removeItem("age")

// JSON -> JavaScript Object Notation