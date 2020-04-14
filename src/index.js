import { elements } from './base';
import { getInput, renderItem, clearInput } from './view';

const createItem = () => {
    // Get input value
    const query = getInput();

    // If there is an input value then render the markup
    if(query) {
        renderItem(query);
        clearInput();
    }
};

// Add item
elements.addButton.addEventListener('click', e => {
    e.preventDefault();
    createItem();
});

// Delete item
if (elements.delete) {
    elements.delete.addEventListener('click', e => {
        let target = e.target.closest('li');
        target.parentElement.removeChild(li);
    });
}


































// const input = document.getElementById('add-item__input');
// const list = document.querySelector('#content ul');

// document.getElementById('add-item__button').addEventListener('click', () => {
//     // Take input value
//     const inputValue = input.value;

//     // Create element
//     const li = document.createElement('li');
//     const elem = document.createElement('span');
//     const del = document.createElement('button');

//     // Add content
//     elem.textContent = inputValue;
//     del.textContent = 'Delete';

//     // Add Class    
//     del.classList.add('delete');

//     if (inputValue !== '') {
//         // Append to DOM
//         li.appendChild(elem);
//         li.appendChild(del);
//         list.appendChild(li);   

//         // Clear input field
//         input.value = '';
//     } else { alert('Add something!');}

//     document.querySelector('.delete').addEventListener('click', () => {
//         list.removeChild(li);
//     });
// });