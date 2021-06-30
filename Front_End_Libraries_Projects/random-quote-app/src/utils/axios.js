import axios from "axios";

const $ = axios.create({
  timeout: 60 * 10000,
  baseURL: "https://raw.githubusercontent.com/kunatastic/quote-api/main/",
});

$.interceptors.request.use(
  (config) => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$.interceptors.response.use(
  (response) => response,
  (error) => {
    // if (error.message.includes("timeout")) {
    //   console.log("false callback", error);
    //   console.log(error.message);
    //   return Promise.reject(error);
    // }
    return Promise.reject(error);
  }
);

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    $.get(url, {
      params: params,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
