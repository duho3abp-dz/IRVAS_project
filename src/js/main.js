'use strict';

import modal from './modules/modal';
import requestForm from './modules/requestForm';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {

    modal({
        button: '.header_btn',
        modalWindow: '.popup_engineer',
        modalCloseButton: '.popup_engineer .popup_close',
        backing: 'popup_engineer'
    });
    
    modal({
        button: '.phone_link',
        modalWindow: '.popup',
        modalCloseButton: '.popup .popup_close',
        backing: 'popup'
    });

    requestForm({
        forms: 'form',
        phoneInputName: 'user_phone'
    });

    tabs({
        tabsBtnClass: '.glazing_block',
        tabsContentClass: '.glazing_content'
    });

});