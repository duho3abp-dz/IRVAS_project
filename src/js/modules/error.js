'use strict';

const error = (() => {
    const div = document.createElement('div');
    div.classList.add('error');

    div.innerHTML = `
        <div class="error__content">
            <h1>Что то пошло не так...</h1>
        </div>
    `;

    return div;
})();

export default error;