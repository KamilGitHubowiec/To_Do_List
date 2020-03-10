const input = document.getElementById('add-item__input');
const list = document.querySelector('#content ul');

document.getElementById('add-item__button').addEventListener('click', () => {
    // Take input value
    const inputValue = input.value;

    // Create element
    const li = document.createElement('li');
    const span = document.createElement('span');

    // Add content
    span.textContent = inputValue;

    // Append to DOM
    li.appendChild(span);
    list.appendChild(li);   

    // console.log(inputValue);
    // Clear input field
    input.value = '';
});




















