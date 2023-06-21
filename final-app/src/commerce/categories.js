import { commerce } from ".";

const fetchMenuCategories = async () => {
  try {
    const { data } = await commerce.categories.list();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export { fetchMenuCategories };
