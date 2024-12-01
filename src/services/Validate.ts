import axiosInstance from "./index";
import { User } from "./config";

const RefreshToken = () => {
  return axiosInstance({
    method: "post",
    url: User.refreshToken,
  }).then((response) => {
    return response;
  });
};

export { RefreshToken };