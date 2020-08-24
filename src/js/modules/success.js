'use strict';

const success = (() => {
    const div = document.createElement('div');
    div.classList.add('success');

    div.innerHTML = `
        <div class="success__content">
            <h1>Запрос отправлен успешно!</h1>
        </div>
    `;

    return div;
})();

export default success;