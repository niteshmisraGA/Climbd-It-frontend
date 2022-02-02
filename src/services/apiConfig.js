import axios from 'axios'


const api = axios.create({
  baseURL: 'https://climbd-it.herokuapp.com'
    // process.env.NODE_ENV === 'production'
    //   ? 'https://climbd-it.herokuapp.com'
    //   : 'https://localhost:8000'
})

export default api