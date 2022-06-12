import axios from 'axios';
import { BASE_URL } from '../config';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${BASE_URL}/api/menus/${id}?populate=cover`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.data.id,
      name: data.data.attributes.name,
      image: data.data.attributes.cover.data.attributes.url,
      price: data.data.attributes.price,
      countInStock: data.data.countInStock,
      qty,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
