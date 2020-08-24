'use strict';

const tabs = ({tabsBtnClass, tabsContentClass}) => {

    const btns = document.querySelectorAll(tabsBtnClass),
          tabsContent = document.querySelectorAll(tabsContentClass);

    btns.forEach((btn, i) => btn.addEventListener('click', () => {

        btns.forEach(elem => elem.classList.remove('active'));
        tabsContent.forEach(elem => elem.style.display = 'none');

        btn.classList.add('active');
        tabsContent[i].style.display = 'block';
        
    }));

};

export default tabs;