import { instance } from ".";

const API_KEY = import.meta.env.VITE_CHEC_PUBLIC_KEY;

const fetchAllProducts = async ({ page = 1 }) => {
  try {
    const { data } = await instance.get(`products?limit=15&page=${page}`, {
      headers: { "X-Authorization": API_KEY },
    });
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchPageProducts = async ({ sortBy, sortOrder }) => {
  try {
    const { data } = await instance.get(
      `products?&sortBy=${sortBy}&sortDirection=${sortOrder}&include=variant_groups`,
      {
        headers: { "X-Authorization": API_KEY },
      }
    );
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchSelectedProducts = async ({ order, category }) => {
  try {
    const { data } = await instance.get(
      `products?&sortBy=${order}${
        category && `&category_slug=${category}`
      }&limit=5`,
      {
        headers: { "X-Authorization": API_KEY },
      }
    );
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchSearchedProducts = async ({ query }) => {
  try {
    const { data } = await instance.get(`products?&query=${query}&limit=3`, {
      headers: { "X-Authorization": API_KEY },
    });
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export {
  fetchAllProducts,
  fetchPageProducts,
  fetchSelectedProducts,
  fetchSearchedProducts,
};
