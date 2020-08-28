'use strict';

import backgroundCloseModal from './backgroundCloseModal';

const picture = ({imgClass}) => {

    imgClass.forEach(img => {

        const pictures = document.querySelectorAll(img),
              popup = document.createElement('div');

        popup.style.cssText = `
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            text-align: center;
            background: rgba(0, 0, 0, 0.5);
            z-index: 10;
        `;
        popup.classList.add('faded');
        document.body.append(popup);
        
        pictures.forEach(pic => pic.addEventListener('click', e => {
            e.preventDefault();

            document.body.style.overflow = 'hidden';
            popup.style.display = 'block';
            popup.innerHTML = `
                <img 
                    class="picture_modal" 
                    src="${pic.parentElement.getAttribute('href')}" 
                    alt="${pic.getAttribute('alt')}"
                />
            `;
            
        }));
    
        backgroundCloseModal({modal: popup});

    });

};

export default picture;