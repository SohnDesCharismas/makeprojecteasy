import axios from "axios";
import Cookies from "js-cookie";

export const mutationFetch = async (
  [url]: [string],
  {
    arg,
  }: {
    arg: {
      method?: string;
      data?: any;
    };
  }
) => {
  const res = await axios({
    method: arg?.method || "POST",
    url: url,
    data: arg.data,
    headers: {
      Authorization: `${Cookies.get("token")}`,
    },
  });
  return res;
};

export default mutationFetch;
