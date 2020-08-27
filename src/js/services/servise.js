'use strict';

const postData = async (form, path) => {
        
    const _url = 'http://localhost:3000';

    const data = await fetch(`${_url}${path}`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(form)
    });

    if (data.ok === false) {throw new Error(`Server: ${_url}, path: ${path}, error status: ${data.status}`);}

    return await data.json();
};

export default postData;