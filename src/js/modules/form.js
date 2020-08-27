'use strict';

import postData from '../services/servise';
import modal from './modal';
import spinner from './spinner';
import success from './success';
import error from './error';
import onlyNumbersInput from './onlyNumbersInput';

const form = ({
    forms, 
    onlyNumbersInputClass, 
    messageClosingTime
}) => {

    onlyNumbersInputClass.forEach(inputClass => onlyNumbersInput({inputClass}));
    
    forms.forEach(form => {

        const url = 'http://localhost:3000',
              path = '/request',
              allForms = document.querySelectorAll(form);

        const responseProcessing = (elem) => {
            elem.style.display = '';
            document.body.append(elem);
            
            setTimeout(() => elem.style.display = 'none', messageClosingTime);
        };

        allForms.forEach(form => form.addEventListener('submit', e => {
            e.preventDefault();
            
            document.body.append(spinner);
            spinner.style.display = '';

            const data = Object.fromEntries(new FormData(form).entries());

            postData(url, data, path)
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