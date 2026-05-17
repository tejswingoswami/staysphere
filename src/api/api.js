import axios from "axios"

const API = axios.create({
  baseURL: "https://staysphere-backend-d8m4.onrender.com"
})

export default API