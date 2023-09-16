import axios from "axios";
import { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a8d3e632b46546c8b0b4f68a97c3c79d",
  },
});

export { CanceledError };
