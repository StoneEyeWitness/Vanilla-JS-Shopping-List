const form = document.querySelector('#item-form');
const text = document.querySelector('#item-input');
const list = document.querySelector('#item-list');
const clear = document.querySelector('#clear-btn');

const addItem = (event) => {
    event.preventDefault();

    if(IsNullOrEmptyOrUndefined(text.value)){
        alert('Please enter an item');
        return;
    }

    newItem(text.value);
}

const newItem = (input) => {
    const item = document.createElement('li');
    const text = document.createTextNode(input);
    const button = itemButton('remove-item btn-link text-red');
    item.appendChild(text);
    item.appendChild(button);
    list.appendChild(item);
}

const itemButton = (classes) => {
    const button = document.createElement('button');
    button.className = classes;

    const buttonIcon = itemIcon('fa-solid fa-xmark');
    button.appendChild(buttonIcon);

    return button;
}

const itemIcon = (classes) => {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

const IsNullOrEmptyOrUndefined = (value) => {
    return value == null || value == '' || value == undefined
}

form.addEventListener('submit',addItem);
clear.addEventListener('click',() => list.innerHTML = '');