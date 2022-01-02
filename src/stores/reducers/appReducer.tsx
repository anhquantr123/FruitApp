import { SET_NAME_USER } from "../actions/actionTypes";

const initialState = { nameUser: "Guys" };
const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_NAME_USER: {
      if (
        action.payload.nameUser != undefined &&
        action.payload.nameUser != null
      ) {
        return {
          nameUser: action.payload.nameUser,
        };
      } else {
        return { ...state };
      }
    }
    default:
      return { ...state };
  }
};

export default appReducer;
