import axios, { AxiosRequestConfig } from "axios";

export interface FetchData<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a8d3e632b46546c8b0b4f68a97c3c79d",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (Config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchData<T>>(this.endpoint, Config)
      .then((res) => res.data);
  };
}

export default APIClient;
