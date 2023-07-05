const form = document.querySelector('form'),
    input = document.querySelector('input'),
    button = document.querySelector('button'),
    lists = document.querySelector('ul');

form.addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault();
    if (input.value) {
        createListItem()
        input.value = '';
    }
    else {
        return null;
    }
    deleteListItem();
}

function createListItem() {
    // Create list item
    const li = document.createElement('li'),
        a = document.createElement('a'),
        icon = document.createElement('i');

    // Icon add classes:
    icon.classList.add('fas', 'fa-trash-alt');
    a.textContent = input.value;
    li.appendChild(a);
    li.appendChild(icon);
    lists.appendChild(li);

}


function deleteListItem() {
    const listItemIcon = document.querySelectorAll('i');
    listItemIcon.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })
    })
}


