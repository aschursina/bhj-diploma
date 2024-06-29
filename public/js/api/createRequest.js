/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    xhr.responseType = 'json';
   
    xhr.onload = () => {
        if(xhr.response) {
            options.callback(xhr.response.error, xhr.response)
        }
    };

    let url = options.url;
    formData = null;

    if(options.method === 'GET') {
        if (options.data && Object.keys(options.data).length) {
            url += '?' + Object.entries(options.data)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
    } else {
        formData = new FormData; 
        if(options.data) {
            Object.entries(options.data).forEach(({key, value}) => {
            formData.append(key, value);
        })};
    } 
    }

    try {
        xhr.open(options.method, url);
        xhr.send(formData);
    } catch (e) {
        options.callback(e);
    };
};