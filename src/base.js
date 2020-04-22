// Stor all of the DOM elements
export const elements = {
    containerBody: document.querySelector('.body-for-containers'),

    list: document.querySelector('.list'),
    listAll: document.querySelectorAll('.list'),
    listCompleted: document.querySelector('.list-completed'),

    item: document.querySelector('.item'),
    itemAll: document.querySelectorAll('.item'),
    itemCheckbox: document.querySelector('.item-checkbox'),
    itemText: document.querySelector('.text'),
    buttonEdit: document.querySelector('.edit'),
    buttonDelete: document.querySelector('.delete'),

    inputAddItem: document.querySelector('#add__input'),
    buttonAddItem: document.querySelector('#add__button'),
    buttonClearAll: document.querySelectorAll('.clear')
};