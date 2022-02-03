import axios from 'axios'


const api = axios.create({
  baseURL: 'https://climbd-it.herokuapp.com'
    // process.env.NODE_ENV === 'production'
    //   ? 'https://climbd-it.herokuapp.com'
    //   : 'https://localhost:8000'
})

const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}

api.interceptors.request.use(
  async function (config) {
    if (localStorage.getItem("token")) {
      config.headers[`Authorization`] = await getToken();
    }
    return config;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);




export default api