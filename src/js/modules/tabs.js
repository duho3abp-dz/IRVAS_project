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

        btns.forEach((btn, i) => {
      
            if (btn.classList.contains(active)) {
                tabsContent[i].style.display = 'block';
            }

            btn.addEventListener('click', () => {

                btns.forEach(elem => elem.classList.remove(active));
                tabsContent.forEach(elem => elem.style.display = 'none');
        
                btn.classList.add(active);
                tabsContent[i].style.display = 'block';
          
            });

        });

    });

};

export default tabs;