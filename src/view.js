import { elements } from './base';

// Get input value
export const getInput = () => elements.inputAddItem.value;
// Clear input field
export const clearInput = () => {
    elements.inputAddItem.value = '';
};
// Create markup for the item
export const renderItem = (doc, listType) => {
    const markup = `
        <li class="item" draggable="true" data-id="${doc.id}">
            <input type="checkbox" class="item-checkbox"> <label class="text">${doc.data().todo}</label> <input type="text" class="item-input">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </li>
    `;
    // Add the markup to the ul list
    if (listType === 'To Do') {
        elements.list.insertAdjacentHTML('beforeend', markup);
    } else if (listType === 'completed') {
        elements.listCompleted.insertAdjacentHTML('beforeend', markup);
    }
};

// export const createItem = () => {
//     // Get input value and save it to the query variable
//     const query = getInput();
//     // If there is an input value then render the markup
//     if(query) {
//         renderItem(query);
//         clearInput();
//     }
// };




// Delete item function
export const deleteItem = e => {
    const li = e.target.parentElement;
    const currentList = li.parentElement;
    currentList.removeChild(li);
    const id = e.target.parentElement.getAttribute('data-id');
    firestore.collection('todos').doc(id).delete();
};
// Edit item function
export const editItem = e => {
        // 1. Get li of the target
        // 2. Get label of the target
        // 3. Get the input of the target
        // 4. Check if the target li has class of edit-mode
        const li = e.target.parentElement;
        const label = li.querySelector('label[class=text]');
        const input = li.querySelector('input[class=item-input]');
        const editButton = li.querySelector('.edit');
        const containsClass = li.classList.contains('edit-mode');
        // Get id of the item
        const id = e.target.parentElement.getAttribute('data-id');

        if (containsClass) {
            // If class of the li = edit-mode
            // label becomes the input value
            label.innerText = input.value;
            editButton.innerText = 'Edit';
            firestore.collection('todos').doc(id).update({ todo: label.innerText })
        } else {
            // Otherwise input value stores the label
            input.value = label.innerText;
            editButton.innerText = 'Save';
        }

        // Toggle edit-mode class 
        li.classList.toggle('edit-mode');
};
// Clear all items functions
export const clearItems = (clearButton) => {
    const container = clearButton.closest('.container');
    const list = container.querySelector('.list');
    list.innerHTML = '';
    firestore.collection('todos').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            if (list.className === 'list') {
                if (doc.data().list === 'To Do') {
                    doc.ref.delete();
                }
            } else if (list.className === 'list list-completed') {
                if (doc.data().list === 'completed') {
                    doc.ref.delete();
                }
            }
        })
    })
};
// // Add item to completed list function
// export const completeItem = e => {
//     const li = e.target.parentElement;
//     const checkbox = li.querySelector('input[type=checkbox]');
//     const listCompleted = elements.listCompleted;
//     const listIncomplete = elements.list;
//     // If checkbox is checked add item to the completed list and if it is not return it to regular list
//     if (checkbox.checked == true) {
//         listCompleted.appendChild(li);
//     } else if (checkbox.checked == false) {
//         listIncomplete.appendChild(li);
//     }
// };