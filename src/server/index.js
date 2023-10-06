import axios from "axios";
import { ENDPOINT } from "../constants";
// import Cookies from "js-cookie";
const request = axios.create({
  baseURL:`${ENDPOINT}api/v1/`,
  timeout:1000,
  // headers:{
  //   Authorization:`Bearer ${Cookie.get(TOKEN)}`
  // }
})


export default request;