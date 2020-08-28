'use strict';

const onlyNumbersInput = ({inputClass}) => {

    const allInput = document.querySelectorAll(inputClass);

    allInput.forEach(input => input.addEventListener('input', e => {
        input.style.background = '#fff';
        input.value = input.value.replace(/\D/, '');
    }));

};

export default onlyNumbersInput;