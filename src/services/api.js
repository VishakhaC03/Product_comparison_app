import axios from "axios";

// Axios instance
const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
});

// Fetch all products
export const fetchProducts = async () => {

  try {

    const response = await api.get(
      "/products?limit=100"
    );

    return response.data.products;

  } catch (error) {

    console.log(
      "Error fetching products:",
      error
    );

    return [];
  }
};

// Search products
export const searchProducts = async (
  query
) => {

  try {

    const response = await api.get(
      `/products/search?q=${query}`
    );

    return response.data.products;

  } catch (error) {

    console.log(
      "Error searching products:",
      error
    );

    return [];
  }
};