'use strict';

const changeFormState = ({
    formState, 
    windowFormsClass, 
    windowWidthId, 
    windowHeightId,
    windowCheckboxClass,
    windowViewTypeId,
    defaultNumForm = 0
}) => {

    const windowForm = document.querySelectorAll(windowFormsClass),
          windowWidth = document.querySelectorAll(windowWidthId),
          windowHeight = document.querySelectorAll(windowHeightId),
          windowViewType = document.querySelectorAll(windowViewTypeId),
          windowCheckBox = document.querySelectorAll(windowCheckboxClass);

    formState.form = windowForm[defaultNumForm].firstElementChild.alt;
    formState.type = windowViewType[0].value;

    const bindActionToElems = (elem, e, prop, targetProp = 'value', ...add) => elem.forEach(el => {
        el.addEventListener(e, ({target}) => {
            formState[prop] = add.length === 0 ? target[targetProp] : target[targetProp][add];
        });
    });

    bindActionToElems(windowForm, 'click', 'form', 'alt');
    bindActionToElems(windowCheckBox, 'change', 'check', 'nextElementSibling', 'id');
    bindActionToElems(windowWidth, 'input', 'width');
    bindActionToElems(windowHeight, 'input', 'height');
    bindActionToElems(windowViewType, 'change', 'type');

};

export default changeFormState;