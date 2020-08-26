'use strict';

const tabs = ({
    tabsBtnClass, 
    tabsContentClass, 
    activeClass
}) => {

    tabsBtnClass.forEach((item, ind) => {
        
        const btns = document.querySelectorAll(tabsBtnClass[ind]),
              tabsContent = document.querySelectorAll(tabsContentClass[ind]),
              active = activeClass[ind];

        const hideTabContent = () => {
            btns.forEach(elem => elem.classList.remove(active));
            tabsContent.forEach(elem => elem.style.display = 'none');
        };

        const showTabContent = (i = 0) => {
            btns[i].classList.add(active);
            tabsContent[i].style.display = 'block';
        };

        btns.forEach((btn, i) => btn.addEventListener('click', () => {
            hideTabContent();
            showTabContent(i);
        }));

        hideTabContent();
        showTabContent();

    });

};

export default tabs;