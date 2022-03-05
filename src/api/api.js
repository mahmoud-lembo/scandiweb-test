import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.lembo.tech/",
  timeout: 1000,
});

export const API = {
  allProducts: "products/get",
  addProduct: "products/add",
  deleteProducts: "products/delete",
};
