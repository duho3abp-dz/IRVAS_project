'use strict';

const checkingInputsOnData = (elem, classContains) => {
    if (elem.classList.contains(classContains.replace(/\./, ''))) {
        const allChildObj = elem.parentElement.childNodes;

        let x = true;
        for (let key in allChildObj) {
            if (allChildObj[key].localName === 'input') {
                if (allChildObj[key].value === '') {
                    allChildObj[key].style.background = 'pink';
                    return true;
                }
            }
            if (allChildObj[key].localName === 'label') {
                if (allChildObj[key].firstElementChild) {
                    x += allChildObj[key].firstElementChild.checked;
                    allChildObj[key].firstElementChild.nextElementSibling.style.background = 'pink';
                    setTimeout(() => {
                        allChildObj[key].firstElementChild.nextElementSibling.style.background = '#fff';
                    }, 1000);
                }
                
            }
        }
        if (x === 1) {return true;}
    }
};

export default checkingInputsOnData;