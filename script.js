const ghostyBlock = document.querySelector('.ghosty-block');
const inputField = document.querySelector('.input-text-field');
inputField.addEventListener('focus', () => {
    ghostyBlock.style.display = 'block';
});
inputField.addEventListener('blur', () => {
    ghostyBlock.style.display = 'none';
});


