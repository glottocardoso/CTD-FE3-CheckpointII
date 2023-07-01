const axios = require ("axios");

const token = localStorage.getItem("token")

const api = axios.create({
    baseURL: "https://dhodonto.ctdprojetointegrador.com/",
    headers: {"Authorization": "Bearer "+ token}
  });
  
  export default api;