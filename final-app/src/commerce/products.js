import { commerce } from ".";

const fetchAllProducts = async ({ page = 1 }) => {
  try {
    const { data } = await commerce.products.list({
      limit: 15,
      page: page,
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchPageProducts = async ({ sortBy, sortOrder }) => {
  try {
    const { data } = await commerce.products.list({
      sortBy: sortBy,
      sortDirection: sortOrder,
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchSelectedProducts = async ({ order, category }) => {
  try {
    const { data } = await commerce.products.list({
      sortBy: order,
      category_slug: category,
      limit: 5,
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchSearchedProducts = async ({ query }) => {
  try {
    const { data } = await commerce.products.list({
      query: query,
      limit: 3,
    });
    return data;
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
