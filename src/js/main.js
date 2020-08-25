'use strict';

import modal from './modules/modal';
import form from './modules/form';
import tabs from './modules/tabs';
import calc from './modules/calc';
import onlyNumbersInput from './modules/onlyNumbersInput';

window.addEventListener('DOMContentLoaded', () => {

    // ------------------------- Modal -------------------------
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
    modal({
        button: '.glazing_price_btn',
        modalWindow: '.popup_calc',
        modalCloseButton: '.popup_calc_close',
        backing: 'popup_calc'
    });
    modal({
        button: '.popup_calc_button',
        modalWindow: '.popup_calc_profile',
        modalCloseButton: '.popup_calc_profile_close',
        backing: 'popup_calc_profile'
    });
    modal({
        button: '.popup_calc_profile_button',
        modalWindow: '.popup_calc_end',
        modalCloseButton: '.popup_calc_end_close',
        backing: 'popup_calc_end'
    });

    // ------------------------- Tabs -------------------------
    tabs({
        tabsBtnClass: '.glazing_block',
        tabsContentClass: '.glazing_content',
        activeClass: 'active'
    });
    tabs({
        tabsBtnClass: '.balcon_icons_img',
        tabsContentClass: '.big_balcon_icons_img',
        activeClass: 'do_image_more'
    });
    tabs({
        tabsBtnClass: '.no_click',
        tabsContentClass: '.decoration_slider_tab',
        activeClass: 'after_click'
    });

    // ------------------------- Form -------------------------
    form({
        forms: 'form'
    });

    // ------------------------- Calc -------------------------
    calc({
        topCheckboxId: '#cold',
        bottomCheckboxId: '#warm'
    });

    // ------------------------- onlyNumbersInput -------------------------
    onlyNumbersInput({
        inputName: 'user_phone'
    });
    onlyNumbersInput({
        inputClass: '.popup_calc .form-control'
    });

});