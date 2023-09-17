import Axios from "../axios.js";

export const fetchExample = async () => {
  try {
    const { data } = Axios.get("/");
    return data;
  } catch (error) {
    throw Error(error.response.data.message); // done some error handling in the backend and we'll get the error message from error.response.data.message
  }
};
