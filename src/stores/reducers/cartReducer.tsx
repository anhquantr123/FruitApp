import { ADD_TO_CART } from "../actions/actionTypes";

const initialCar = {
  totalQuantily: 0,
  carts: [] as any,
};

const cartReducer = (state = initialCar, action: any) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (state.carts.length == 0) {
        return {
          carts: [...state.carts, action.payload],
          totalQuantily: state.totalQuantily + action.payload.quantily,
        };
      } else {
        var tem: any[] = [];
        var isCheck = false;
        state.carts.forEach((e: any) => {
          if (e.id === action.payload.id) {
            tem.push({ ...e, quantily: e.quantily + action.payload.quantily });
            isCheck = true;
          } else {
            tem.push(e);
          }
        });
        if (isCheck == false) {
          tem.push(action.payload);
        }
        return {
          carts: [...tem],
          totalQuantily: state.totalQuantily + action.payload.quantily,
        };
      }
    }

    default:
      return state;
  }
};

export default cartReducer;
