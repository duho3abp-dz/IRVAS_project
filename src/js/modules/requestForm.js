'use strict';

import postData from '../services/servise';
import spinner from './spinner';
import success from './success';
import error from './error';

const requestForm = ({forms, phoneInputName}) => {
    
    const url = 'http://localhost:3000',
          path = '/request',
          allForms = document.querySelectorAll(forms),
          allPhonesInput = document.getElementsByName(phoneInputName);

    const responseProcessing = (elem) => {
        spinner.style.display = 'none';
        elem.style.display = '';
        document.body.append(elem);

        setTimeout(() => {
            elem.style.display = 'none';
        }, 2000);
    };

    allPhonesInput.forEach(input => input.addEventListener('keydown', e => {
        if (! +e.key && e.key !== 'Backspace' && +e.key !== 0) {
            e.preventDefault();
        }
    }));

    allForms.forEach(form => form.addEventListener('submit', e => {
        e.preventDefault();
        
        document.body.append(spinner);
        spinner.style.display = '';

        const data = Object.fromEntries(new FormData(form).entries());

        postData(url, data, path)
            .then(res => {
                form.reset();
                responseProcessing(success);
            })
            .catch(err => responseProcessing(error));
    }));

};

export default requestForm;