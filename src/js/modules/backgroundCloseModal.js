'use strict';

const backgroundCloseModal = ({modal}) => {

    modal.addEventListener('click', ({target}) => {
        if(target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
};

export default backgroundCloseModal;