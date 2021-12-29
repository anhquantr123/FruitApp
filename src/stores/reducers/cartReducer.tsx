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
    case ADD_TO_CART: {
      {
        if (state.carts.length > 0) {
          [...state.carts].filter((item: any) => {
            console.log("================");
            if (item.id === action.payload.id) {
              return state;
            } else {
              return {
                carts: state.carts.concat(action.payload),
                totalQuantily: state.totalQuantily + action.payload.quantily,
              };
            }
          });
        } else {
          return {
            carts: state.carts.concat(action.payload),
            totalQuantily: state.totalQuantily + action.payload.quantily,
          };
        }
      }
    }
    case UP_QUANTITY_PRODUCT_CAR:
      return;
    case DOWN_QUANTITY_PRODUCT_CAR:
      return;
    default:
      return state;
  }
};

export default cartReducer;
