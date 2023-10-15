import axios, { AxiosRequestConfig } from "axios";

export interface FetchData<T> {
  count: number;
  results: T[];
  next: string | null;
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

  getOne = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + id)
      .then((res) => res.data);
  };
}

export default APIClient;
