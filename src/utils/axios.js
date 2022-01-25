import Axios from "axios";

let axios = Axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

export default axios;