import * as actionTypes from "../actions/actionTypes";

export const addToCart = (payload: any) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload,
  };
};
