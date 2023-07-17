import axios from 'axios'



const axiosClient =axios.create({
    baseURL:'https://api.thedogapi.com/v1/',
    // timeout:1000,
    // headers:{'X-Custom-Header': 'foobar'}
})

// const axiosClient = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
// });


export default axiosClient;