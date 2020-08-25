'use strict';

const backingCloseModal = ({modal, backing}) => {
    modal.addEventListener('click', ({target}) => {
        if(target.classList.value === backing) {
            modal.style.display = 'none';
        }
    });
};

export default backingCloseModal;