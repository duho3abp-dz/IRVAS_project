'use strict';

const toggleCheckbox = ({checkboxClass}) => {

    checkboxClass.forEach((item, i) => {
         
        const allCheckbox = document.querySelectorAll(checkboxClass[i]);

        allCheckbox.forEach(chackBox => chackBox.addEventListener('click', ({target}) => {

            allCheckbox.forEach(chackBox => chackBox.checked = false);
            target.checked = true;

        }));

    });

};

export default toggleCheckbox;