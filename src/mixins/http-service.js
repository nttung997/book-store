import axios from 'axios'

export default {
  setupInterceptors: () => {
    axios.defaults.baseURL = process.env.VUE_APP_API_URL;

    axios.defaults.transformRequest = [(data, headers) => {
      headers.common["Accept"] = 'application/json'
      return data
    }, ...axios.defaults.transformRequest]

    axios.interceptors.response.use(
      response => {
        return response
      },
      error => {
        return Promise.reject(error.response)
      }
    )
  }
}
