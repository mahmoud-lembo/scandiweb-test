import { useQuery } from "react-query";
import { API, instance } from "../api/api";

export const useProducts = () => {
  return useQuery("products", async () => {
    const { data } = await instance.get(API.allProducts);
    return data;
  });
};
