import axios, { AxiosInstance } from "axios";
import secrets from "../../secrets.json";

const customAxios: AxiosInstance = axios.create({
  baseURL: secrets.serverIP,
  headers: {
    // "Content-Type": "application/x-www-form-urlencoded",
    // "Content-Type": "application/json",
  },
});

export default customAxios;
