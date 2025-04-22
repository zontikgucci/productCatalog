import axios from "axios";

export const fetchProducts = () => {
  return axios({
    method: "get",
    url: "https://jsonfakery.com/products",
    responseType: "json",
  })
    .then((response) => response.data)
    .catch((error) => {
      console.error("API Error:", error);
      throw error;  // Пробрасываем ошибку для обработки в компоненте
    });
};