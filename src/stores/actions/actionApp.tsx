import { SET_NAME_USER } from "./actionTypes";

export const setName = (payload: any) => {
  return {
    type: SET_NAME_USER,
    payload,
  };
};
