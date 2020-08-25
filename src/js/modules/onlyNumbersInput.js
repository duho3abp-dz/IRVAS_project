'use strict';

const onlyNumbersInput = ({inputClass, inputName}) => {

    let allInput;

    if (inputClass) {
        allInput = document.querySelectorAll(inputClass);        
    } else {
        allInput = document.getElementsByName(inputName);    
    }

    allInput.forEach(input => input.addEventListener('keydown', e => {
        if (! +e.key && e.key !== 'Backspace' && +e.key !== 0) {
            e.preventDefault();
        }
    }));

};

export default onlyNumbersInput;