import axios, { AxiosError } from "axios";
import { BASE_URL } from "../../credentials/backend";
import toast from "react-hot-toast";

const fetcher = (multipart?: boolean) => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": multipart ? "multipart/form-data" : "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
};

export const postHandler = async (
  url: string,
  body: object,
  multipart?: boolean
) => {
  try {
    const res = await fetcher(multipart).post(url, body);
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
