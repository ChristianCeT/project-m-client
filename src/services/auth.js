import axios from "axios";
import { BASE_API_URL } from "../utils/utils.js";

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${BASE_API_URL}/users/login`, {
      email,
      password,
    });

    if (res.status !== 200) return;

    localStorage.setItem("user", JSON.stringify(res.data.user));
    return res.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};
