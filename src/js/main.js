'use strict';

import './slider';

import modal from './modules/modal';
import form from './modules/form';
import tabs from './modules/tabs';
import timer from './modules/timer';
import picture from './modules/picture';

window.addEventListener('DOMContentLoaded', () => {

    // ------------ * DATA * ------------

    // * Modal Data *
    const modalData = {
        buttons: [
            '.header_btn',
            '.phone_link',
            '.glazing_price_btn',
            '.popup_calc_button',
            '.popup_calc_profile_button'
        ],
        modalCloseButtons: [
            '.popup_engineer .popup_close',
            '.popup .popup_close',
            '.popup_calc_close',
            '.popup_calc_profile_close',
            '.popup_calc_end_close',
        ],
        notCloseClickBgClass: [
            '.popup_calc_profile',
            '.popup_calc_end'
        ],
        inputOrCheckboxNotSwitchData: [
            '.popup_calc_button', 
            '.popup_calc_profile_button'
        ],
        modalTimerClass: '.popup',
        timer: 60000
    };

    // * Tabs Data *
    const tabsData = {
        tabsBtnClass: [
            '.glazing_block',
            '.balcon_icons_img',
            '.no_click'
        ],
        tabsContentClass: [
            '.glazing_content',
            '.big_balcon_icons_img',
            '.decoration_slider_tab'
        ],
        activeClass: [
            'active',
            'do_image_more',
            'after_click'
        ]
    };

    // * Forms Data *
    const formsData = {
        path: '/request',
        forms: ['form'],
        onlyNumbersInputClass: [
            '.form_input-user_phone',
            '.popup_calc .form-control'
        ],
        formStateElemClass: {
            windowFormsClass: '.balcon_icons_img',
            windowWidthId: '#width',
            windowHeightId: '#height',
            windowCheckboxClass: '.checkbox',
            windowViewTypeId: '#view_type',
        },
        messageClosingTime: 3000,
    };

    // * Timer Data *
    const timerData = {
        targetDate: ['2020-09-19'],
        days: ['#days'],
        hours: ['#hours'],
        minutes: ['#minutes'],
        seconds: ['#seconds'],
    };

    // * Picture Data *
    const pictureData = {
        imgClass: ['.preview']
    };
    
    // ------------ * Running Scripts * ------------
    modal(modalData);
    tabs(tabsData);
    form(formsData);
    timer(timerData);
    picture(pictureData);

});