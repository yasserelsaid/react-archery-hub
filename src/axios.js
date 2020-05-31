import axios from "axios";

const instance = axios.create({
  baseURL: "https://shahda-archery-hub.herokuapp.com",
});

// instance.defaults.headers.common["Authorization"] = "Auth Token From instance";

export default instance;
