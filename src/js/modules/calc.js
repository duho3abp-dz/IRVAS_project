'use strict';

const calc = ({topCheckboxId, bottomCheckboxId}) => {

    const topCheckbox = document.querySelector(topCheckboxId),
          bottomCheckbox = document.querySelector(bottomCheckboxId);

    const toggleCheckbox = (a, b) => a.addEventListener('click', () => {
        if (b.previousElementSibling.checked) {
            b.previousElementSibling.checked = false;
        }
    });

    toggleCheckbox(topCheckbox, bottomCheckbox);
    toggleCheckbox(bottomCheckbox, topCheckbox);

};

export default calc;