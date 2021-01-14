// Stor all of the DOM elements
export const elements = {
    containerBody: document.querySelector('.body-for-containers'),
    landingPage: document.querySelector('.landing-page'),

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
    buttonClearAll: document.querySelectorAll('.clear'),

    loginInputAll: document.querySelectorAll('.input'),
    loginForm: document.querySelector('.login-form'),
    signupForm: document.querySelector('.signup-form'),
    buttonLoadLogin: document.querySelector('.load-login'),
    buttonLoadSignup: document.querySelector('.load-signup'),
    buttonSubmit: document.querySelector('.button-submit'),
    accountCreatedNotice: document.querySelector('.account-created-notice'),

    buttonLogout: document.querySelector('#logout'),
    account: document.querySelector('#account')
};