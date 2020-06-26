import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://archery-hub.web.app',
});

// instance.defaults.headers.common["Authorization"] = "Auth Token From instance";

export default instance;
