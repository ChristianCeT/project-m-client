import axios from "axios";
import { BASE_API_URL } from "../utils/utils.js";

export const getBooks = async () => {
  const response = await axios.get(`${BASE_API_URL}/books`);
  return response.data;
};
