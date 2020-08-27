'use strict';

import postData from '../services/servise';
import modal from './modal';
import spinner from './spinner';
import success from './success';
import error from './error';
import toggleCheckbox from './toggleCheckbox';
import onlyNumbersInput from './onlyNumbersInput';
import changeFormState from './changeFormState';

const form = ({
    path,
    forms, 
    onlyNumbersInputClass, 
    messageClosingTime,
    formStateElemClass
}) => {

    let formState = {};
    changeFormState({...formStateElemClass, formState});
    toggleCheckbox({checkboxClass: ['.checkbox']});

    onlyNumbersInputClass.forEach(inputClass => onlyNumbersInput({inputClass}));
    
    forms.forEach(form => {

        const allForms = document.querySelectorAll(form);

        const responseProcessing = (elem) => {
            elem.style.display = '';
            document.body.append(elem);

            setTimeout(() => elem.style.display = 'none', messageClosingTime);
        };

        allForms.forEach(form => form.addEventListener('submit', e => {
            e.preventDefault();
            
            document.body.append(spinner);
            spinner.style.display = '';

            const formData = new FormData(form);
            if (form.dataset.calc === 'end') {
                for (let key in formState) {
                    formData.append(key, formState[key]);
                }
            }
            const data = Object.fromEntries(formData.entries());

            postData(data, path)
                .then(res => responseProcessing(success))
                .catch(err => responseProcessing(error))
                .finally(() => {
                    spinner.style.display = 'none';
                    form.reset();
                    modal({close: true});
                    document.body.style.overflow = '';
                });

        }));

    });

};

export default form;