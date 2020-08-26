'use strict';

import backgroundCloseModal from './backgroundCloseModal';

const modal = ({
    buttons, 
    modalCloseButtons,
    close, 
    timer,
    modalTimerClass,
    modalWindows = [
        '.popup_engineer',
        '.popup',
        '.popup_calc',
        '.popup_calc_profile',
        '.popup_calc_end'
    ]
}) => {
    
    let timerOpenModal;
    if (modalTimerClass && timer) {
        timerOpenModal = setTimeout(() => {
            document.querySelector(modalTimerClass).style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }, timer);
    }
    
    const closingAllModals = () => {
        modalWindows.forEach(modalClass => {
            document.querySelector(modalClass).style.display = 'none';
        });
    };

    if (close) {
        closingAllModals();
        return;
    }

    buttons.forEach((item, i) => {

        const btns = document.querySelectorAll(buttons[i]),
              modal = document.querySelector(modalWindows[i]),
              closeBtn = document.querySelector(modalCloseButtons[i]);

        btns.forEach(btn => btn.addEventListener('click', e => {
            if (e.target) {e.preventDefault();}

            closingAllModals();
            clearInterval(timerOpenModal);
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

        }));

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        backgroundCloseModal({modal});
        
    });

};

export default modal;