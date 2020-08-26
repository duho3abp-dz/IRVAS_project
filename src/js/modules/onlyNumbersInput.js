'use strict';

const onlyNumbersInput = ({inputClass, inputName}) => {

    const allInput = document.querySelectorAll(inputClass);

    allInput.forEach(input => input.addEventListener('keydown', e => {
        if (! +e.key && e.key !== 'Backspace' && +e.key !== 0) {
            e.preventDefault();
        }
    }));

};

export default onlyNumbersInput;