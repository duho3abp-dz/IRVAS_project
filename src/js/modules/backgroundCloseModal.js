'use strict';

const backgroundCloseModal = ({modal, bg}) => {
    modal.addEventListener('click', ({target}) => {
        if(target.classList.value === bg) {
            modal.style.display = 'none';
        }
    });
};

export default backgroundCloseModal;