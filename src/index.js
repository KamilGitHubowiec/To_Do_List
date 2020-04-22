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
elements.buttonClearAll.forEach(clearButton => {
    clearButton.addEventListener('click', () => {
        clearItems(clearButton);
    });
});

let draggedItem = null;

// Drag N Drop
elements.listAll.forEach(list => {
    list.addEventListener('dragstart', e => {
        if(e.target.className === 'item') {
            draggedItem = e.target;
            draggedItem.classList.add('dragging');
            console.log('dragstart');
        };
    });

    list.addEventListener('dragend', e => {
        if(e.target.className === 'item') {
            console.log('dragend');
        };
    });

    list.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(list, e.clientY);
        if (afterElement === null) {
            list.appendChild(draggedItem);
        } else {
            list.insertBefore(draggedItem, afterElement);
        }
        // console.log(currentListElements);
        // const currentListElements = list.querySelectorAll('.item:not(.dragging)');
    });

    list.addEventListener('dragenter', e => {
        e.preventDefault();
    });

    list.addEventListener('dragleave', e => {

    });

    list.addEventListener('drop', e => {
        draggedItem.classList.remove('dragging');
    });
});


// const draggables = document.querySelectorAll('.draggable')
// const containers = document.querySelectorAll('.container')

function getDragAfterElement(list, y) {
  const draggableElements = [...list.querySelectorAll('.item:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
};