import { elements } from './base';
import { clearInput, getInput, renderItem, deleteItem, editItem, completeItem, clearItems } from './view';

//////////////// FIRESTORE /////////////////////
// Save data to the firestore
elements.buttonAddItem.addEventListener('click', e => {
    e.preventDefault();
    const query = getInput();
    if (!query) return 
    // Save data to the firestore if there is an input value
    firestore.collection('todos').add({
        todo: query,
        list: 'To Do'
    })
    clearInput();
});
// Live listener - Outputs data to the DOM and Removes it
firestore.collection('todos').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if (change.type == 'added'){
            const listType = change.doc.data().list;
            renderItem(change.doc, listType);
        } 
    })
})

// Delete item && Edit item && Check item
elements.listAll.forEach(list => {
    list.addEventListener('click', e => {
        if (e.target.className === 'delete') {
            deleteItem(e);
        } else if (e.target.className === 'edit') {
            editItem(e);
        } 
        // else if (e.target.className === 'item-checkbox') {
            // completeItem(e);
        // }
    });
});

// Clear all items
elements.buttonClearAll.forEach(clearButton => {
    clearButton.addEventListener('click', () => {
        clearItems(clearButton);
    });
});



// Drag N Drop
let draggedItem = null;

elements.listAll.forEach(list => {
    list.addEventListener('dragstart', e => {
        if(e.target.className === 'item') {
            draggedItem = e.target;
            draggedItem.classList.add('dragging');
            // console.log('dragstart');
        };
    });

    list.addEventListener('dragend', e => {
        console.log('dragend');
        const id = draggedItem.getAttribute('data-id');
        if (draggedItem.parentElement.className == 'list list-completed') {
            firestore.collection('todos').doc(id).update({ list: 'completed' });
        } else if (draggedItem.parentElement.className == 'list') {
            firestore.collection('todos').doc(id).update({ list: 'To Do' });
        }
    });

    list.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(list, e.clientY);
        if (afterElement === null) {
            list.appendChild(draggedItem);
        } else {
            list.insertBefore(draggedItem, afterElement);
        }
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