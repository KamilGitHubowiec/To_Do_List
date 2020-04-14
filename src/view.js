import { elements } from './base';

// Get input value
export const getInput = () => elements.input.value;

// Clear input
export const clearInput = () => {
    elements.input.value = '';
};

// Create markup
export const renderItem = (inputValue) => {
    const markup = `
        <li class="item">
            <p class="text">${inputValue}</p>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </li>
    `;
    elements.list.insertAdjacentHTML('beforeend', markup);
};