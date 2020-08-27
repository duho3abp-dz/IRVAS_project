'use strict';

const backgroundCloseModal = ({modal, clickBg = true}) => {

    modal.addEventListener('click', ({target}) => {
        if(target === modal && clickBg) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
};

export default backgroundCloseModal;