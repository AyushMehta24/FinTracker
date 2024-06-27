import axios, { AxiosError } from "axios";
import { BASE_URL } from "../../credentials/backend";
import toast from "react-hot-toast";

const fetcher = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
};

export const postHandler = async (url: string, body: object) => {
  try {
    const res = await fetcher().post(url, body);
    return res.data;
  } catch (error) {
    if ((error as AxiosError).code === "ERR_NETWORK") {
      toast.error("Network Error");
    } else {
      const { message } = (error as AxiosError).response?.data as {
        message: string;
      };
      toast.error(message);
    }
    return null;
  }
};
