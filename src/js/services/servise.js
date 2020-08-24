'use strict';

const postData = async (url, form, path) => {

    const data = await fetch(`${url}${path}`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(form)
    });

    if (data.ok === false) {throw new Error(`Server: ${url}, path: ${path}, error status: ${data.status}`);}

    return await data.json();
};

export default postData;