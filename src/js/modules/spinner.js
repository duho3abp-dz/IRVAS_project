'use strict';

const spinner = (() => {
    const div = document.createElement('div');
    div.classList.add('spinner');

    div.innerHTML = `
        <div class="spinner__content">
            <div class="loadingio-spinner-spinner-yp3wiqwbk4n">
                <div class="ldio-d9unny6jty">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            </div>
        </div>
    `;

    return div;
})();

export default spinner;