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
        "Accept": "application/json"
    }
});

// instance.interceptors.response.use(
//     response => response,
//     error => {
//         if (error.response.status === 401 && window.location.pathname !== "/login") {

//             window.localStorage.setItem('actual_redirect', window.location.href)
//             window.location.replace('/login');
//         } else if (error.response.status === 406) {

//             alert('You are not authorized for this platform. You will be now logged out.');
//             auth.globalLogout();
//         }
//         console.log(error);
//         return Promise.reject(error);
//     }
// );

export default instance