'use strict';

const tabs = ({tabsBtnClass, tabsContentClass, activeClass}) => {

    const btns = document.querySelectorAll(tabsBtnClass),
          tabsContent = document.querySelectorAll(tabsContentClass);

    btns.forEach((btn, i) => {
        
        if (btn.classList.contains(activeClass)) {
            tabsContent[i].style.display = 'flex';
        }

        btn.addEventListener('click', () => {

            btns.forEach(elem => elem.classList.remove(activeClass));
            tabsContent.forEach(elem => elem.style.display = 'none');
    
            btn.classList.add(activeClass);
            tabsContent[i].style.display = 'flex';
            
        });
    });

};

export default tabs;