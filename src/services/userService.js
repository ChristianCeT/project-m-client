import axios from "axios";
import { BASE_API_URL } from "../utils/utils.js";

export const getUsers = async () => {
  const response = await axios.get(`${BASE_API_URL}/users`);
  console.log("Fetching users from:", `${BASE_API_URL}/users`);

  return response.data;
};
