import * as actionTypes from "../actions/actionTypes";

export const addToCart = (payload: any) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload,
  };
};

export const upProductCar = ({ payload }: any) => {
  return {
    type: actionTypes.UP_QUANTITY_PRODUCT_CAR,
    payload,
  };
};

export const downProductCar = ({ payload }: any) => {
  return {
    type: actionTypes.DOWN_QUANTITY_PRODUCT_CAR,
    payload,
  };
};
