'use strict';

const modal = ({button, modalWindow, modalCloseButton, backing, close, allModalWindowsClass = [
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

    btns.forEach(btn => btn.addEventListener('click', () => {
        closingAllModals();

        modal.style.display = 'flex';
    }));

    closeBtn.addEventListener('click', () => modal.style.display = 'none');

    modal.addEventListener('click', ({target}) => {
        if(target.classList.value === backing) {
            modal.style.display = 'none';
        }
    });

};

export default modal;