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

    if(options.method === 'GET') {

    } else {
        formData = new FormData;
    }

    if(options.data) {
        Object.entries(options.data).forEach(({key, value}) => {
            body.append(key, value);
        })
    }
};
