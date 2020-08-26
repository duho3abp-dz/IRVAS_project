'use strict';

import backgroundCloseModal from './backgroundCloseModal';

const picture = ({imgClass}) => {

    imgClass.forEach(img => {

        const pictures = document.querySelectorAll(img);

        const div = document.createElement('div');
        div.style.cssText = `
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
        document.body.append(div);
        
        pictures.forEach(pic => pic.addEventListener('click', e => {
            e.preventDefault();
    
            div.style.display = 'block';
            div.innerHTML = `
                <img 
                    class="picture_modal" 
                    src="${pic.parentElement.getAttribute('href')}" 
                    alt="${pic.getAttribute('alt')}"
                />
            `;
            
        }));
    
        backgroundCloseModal({
            modal: div, 
            bg: ''
        });

    });

};

export default picture;