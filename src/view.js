import { elements } from './base';

// Get input value
export const getInput = () => elements.inputAddItem.value;

// Clear input field
export const clearInput = () => {
    elements.inputAddItem.value = '';
};

// Create markup with an item function
export const renderItem = (inputValue) => {
    const markup = `
        <li class="item">
            <input type="checkbox" class="item-checkbox"> <label class="text">${inputValue}</label> <input type="text" class="item-input">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </li>
    `;
    // Add the markup to the ul list
    elements.list.insertAdjacentHTML('beforeend', markup);
};

// Delete item function
export const deleteItem = e => {
    // Remove item if class of the target is 'delete' 
    const li = e.target.parentElement;
    li.parentNode.removeChild(li); 
}

// Edit item function
export const editItem = e => {
        // 1. Get li of the target
        // 2. Get label of the target
        // 3. Get the input of the target
        // 4. Check if the target li has class of edit-mode
        const li = e.target.parentElement;
        const label = li.querySelector('label[class=text]');
        const input = li.querySelector('input[class=item-input');
        const containsClass = li.classList.contains('edit-mode');

        if (containsClass) {
            // If class of the li = edit-mode
            // label becomes the input value
            label.innerText = input.value;
        } else {
            // Otherwise input value stores the label
            input.value = label.innerText;
        }

        // Toggle edit-mode class 
        li.classList.toggle('edit-mode');
};