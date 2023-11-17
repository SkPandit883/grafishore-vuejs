import axios from 'axios'

export const baseURL = import.meta.env.VITE_HOST_URL


const instance = axios.create({
    baseURL: baseURL + "api",
    timeout: 100000,
    headers: {
        "common": {
            "X-Requested-With": "XMLHttpRequest",
            "Access-Control-Allow-Origin": "*",
        },
        "Accept": "application/json",
        "X-API-KEY": import.meta.env.VITE_API_KEY

    }
});

instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 403 && error.response.data.error =="invalid API key") {
            console.log("Response", error.response.data.error)
            alert("Invalid API key ,check your env.")
        }
        return Promise.reject(error);
    }
);

export default instance