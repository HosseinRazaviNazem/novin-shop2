import axios from "axios";

class http {
  constructor() {
    axios.defaults.baseURL = 'http://localhost:3003/';
    axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
    axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    axios.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  get(url, config) {
    return axios.get(url, config);
  }
  post(url, data, config) {
    return axios.post(url, data, config);
  }
  put(url, data, config) {
    return axios.put(url, data, config);
  }
  delete(url, config) {
    return axios.delete(url, config);
  }
}
export default new http();
