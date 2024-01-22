import axios from 'axios';

const url = axios.get('https://jsonplaceholder.typicode.com/todos/1');

axios.get(url).then(response => {
  console.log(response.data);
});