'use strict';

const checkingInputsOnData = (elem, classContains) => {

    let label = true;
    let input = true;

    classContains.forEach(item => {

        if (elem.classList.contains(item.replace(/\./, ''))) {
            const allChildObj = elem.parentElement.childNodes;
    
            for (let key in allChildObj) {
                if (allChildObj[key].localName === 'input') {
                    if (allChildObj[key].value === '') {
                        allChildObj[key].style.background = 'pink';
                        input += true;
                    }
                }
                if (allChildObj[key].localName === 'label') {
                    if (allChildObj[key].firstElementChild) {
                        label += allChildObj[key].firstElementChild.checked;
                        allChildObj[key].firstElementChild.nextElementSibling.style.background = 'pink';
                        setTimeout(() => {
                            allChildObj[key].firstElementChild.nextElementSibling.style.background = '#fff';
                        }, 1000);
                    }
                    
                }
            }
        }
        
    });

    if (label === 1 || input === 2 || input === 3) { return true; }
};

export default checkingInputsOnData;