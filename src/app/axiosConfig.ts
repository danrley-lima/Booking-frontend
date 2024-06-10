import axios from "axios";
import { API } from "./utils/apiRoutes";

const axiosInstance = axios.create({
  baseURL: API,
  // timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
