import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "241ef22de5e7df6c6eceb300048a23fc",
        language: "ko-KR"
    }
})

export default instance;