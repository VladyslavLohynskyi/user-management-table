import axios from 'axios';

const $host = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com/',
});

export { $host };
