'use strict';

const calc = ({topCheckboxId, bottomCheckboxId}) => {

    topCheckboxId.forEach((item, i) => {

        const topCheckbox = document.querySelector(topCheckboxId[i]),
              bottomCheckbox = document.querySelector(bottomCheckboxId[i]);

        const toggleCheckbox = (a, b) => a.addEventListener('click', () => {
            if (b.previousElementSibling.checked) {
                b.previousElementSibling.checked = false;
            }
        });

        toggleCheckbox(topCheckbox, bottomCheckbox);
        toggleCheckbox(bottomCheckbox, topCheckbox);

    });

};

export default calc;