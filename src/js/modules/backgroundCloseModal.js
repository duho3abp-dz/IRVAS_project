'use strict';

const backgroundCloseModal = ({modal, background}) => {
    modal.addEventListener('click', ({target}) => {
        if(target.classList.value === background) {
            modal.style.display = 'none';
        }
    });
};

export default backgroundCloseModal;