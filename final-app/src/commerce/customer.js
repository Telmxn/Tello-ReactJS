import { instance } from ".";
import { toast } from "react-toastify";

const API_KEY = import.meta.env.VITE_CHEC_SECRET_KEY;

const getToken = async ({ email }) => {
  try {
    const body = {
      email: email,
      base_url: "http://localhost:5173/confirm/",
    };
    const { data } = await instance.post(`customers/email-token`, body, {
      headers: {
        "X-Authorization": API_KEY,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchOrders = async ({ customerId }) => {
  try {
    const { data } = await instance.get(`customers/${customerId}/orders`, {
      headers: {
        "X-Authorization": API_KEY,
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(error);
  }
};

const fetchCustomer = async ({ customerId }) => {
  try {
    const { data } = await instance.get(`customers/${customerId}`, {
      headers: {
        "X-Authorization": API_KEY,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const exchangeToken = async ({ token }) => {
  try {
    const body = {
      token: token,
    };
    const { data } = await instance.post(`customers/exchange-token`, body, {
      headers: {
        "X-Authorization": API_KEY,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const createCustomer = async ({ email, phone, firstname, lastname }) => {
  try {
    const body = {
      email: email,
      phone: phone,
      firstname: firstname,
      lastname: lastname,
    };
    const { data } = await instance.post(`customers`, body, {
      headers: {
        "X-Authorization": API_KEY,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateCustomer = async ({
  customerId,
  email,
  phone,
  firstname,
  lastname,
}) => {
  try {
    const body = {
      email: email,
      phone: phone,
      firstname: firstname,
      lastname: lastname,
    };
    const { data } = await instance.put(`customers/${customerId}`, body, {
      headers: {
        "X-Authorization": API_KEY,
        "Content-Type": "application/json",
      },
    });
    toast.success("İstifadəçinin məlumatları yeniləndi.");
    return data;
  } catch (error) {
    toast.error("İstifadəçinin məlumatları yenilənmədi.");
    throw new Error(error);
  }
};

export {
  getToken,
  fetchOrders,
  fetchCustomer,
  exchangeToken,
  createCustomer,
  updateCustomer,
};
