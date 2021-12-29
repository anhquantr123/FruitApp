import {
  ADD_TO_CART,
  DOWN_QUANTITY_PRODUCT_CAR,
  UP_QUANTITY_PRODUCT_CAR,
} from "../actions/actionTypes";

const initialCar = {
  totalQuantily: 0,
  carts: [],
};

const cartReducer = (state = initialCar, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        carts: state.carts.concat(action.payload),
        totalQuantily: state.totalQuantily + action.payload.quantily,
      };
    case UP_QUANTITY_PRODUCT_CAR:
      return;
    case DOWN_QUANTITY_PRODUCT_CAR:
      return;
    default:
      return state;
  }
};

export default cartReducer;
