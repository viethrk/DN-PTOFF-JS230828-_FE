import axiosInstance from "../config/axios.config";

export const getListUser = async () => {
  try {
    const res = await axiosInstance.get("/api/v1/user");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
