'use strict';

const modal = ({button, modalWindow, modalCloseButton, backing}) => {
    
    const btns = document.querySelectorAll(button),
          modal = document.querySelector(modalWindow),
          closeBtn = document.querySelector(modalCloseButton);

    btns.forEach(btn => btn.addEventListener('click', () => modal.style.display = 'flex'));

    closeBtn.addEventListener('click', () => modal.style.display = 'none');

    modal.addEventListener('click', ({target}) => {
        if(target.classList.value === backing) {
            modal.style.display = 'none';
        }
    });

};

export default modal;