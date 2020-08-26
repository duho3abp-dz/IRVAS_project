'use strict';

import backgroundCloseModal from './backgroundCloseModal';

const modal = ({button, modalWindow, modalCloseButton, background, close, timer, allModalWindowsClass = [
    '.popup',
    '.popup_engineer',
    '.popup_calc',
    '.popup_calc_profile',
    '.popup_calc_end'
]}) => {
    
    const btns = document.querySelectorAll(button),
          modal = document.querySelector(modalWindow),
          closeBtn = document.querySelector(modalCloseButton);

    const closingAllModals = () => {
        allModalWindowsClass.forEach(modalClass => {
            document.querySelector(modalClass).style.display = 'none';
        });
    };
    
    if (close) {
        closingAllModals();
        return;
    }
    if (timer) {
        setTimeout(() => modal.style.display = 'flex', timer);
    }

    btns.forEach(btn => btn.addEventListener('click', () => {
        closingAllModals();

        modal.style.display = 'flex';
    }));

    closeBtn.addEventListener('click', () => modal.style.display = 'none');

    backgroundCloseModal({modal, background});

};

export default modal;