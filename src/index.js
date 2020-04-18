import { elements } from './base';
import { getInput, renderItem, clearInput, deleteItem, editItem, completeItem, clearItems } from './view';

const createItem = () => {
    // Get input value and save it to the query variable
    const query = getInput();
    // If there is an input value then render the markup
    if(query) {
        renderItem(query);
        clearInput();
    }
};

// Add item event listener
elements.buttonAddItem.addEventListener('click', e => {
    e.preventDefault();
    createItem();
});

// Delete item && Edit item
elements.listAll.forEach(item => {
    item.addEventListener('click', e => {
        if (e.target.className === 'delete') {
            deleteItem(e);
        } else if (e.target.className === 'edit') {
            editItem(e);
        } else if (e.target.className === 'item-checkbox') {
            completeItem(e);
        }
    });
});

// Clear all items
elements.buttonClearAll.forEach(item => {
    item.addEventListener('click', () => {
        clearItems(item);
    });
});