import { ref } from 'vue'

export function fetchAPI(method, path, data, callback) {
    const result = ref({});
    const params = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    }
    if (data) {
        params.body = JSON.stringify(data.value)
    }

    fetch("http://localhost:8080" + path, params)
        .then(res => res.json())
        .then(res => {
            result.value = res;
            if (callback) {
                callback(res);
            }
        })

    return result;
}