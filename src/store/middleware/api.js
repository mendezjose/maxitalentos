import axios from "axios";
import { apiCallBegan, apiCallFailed, apiCallSuccess } from "../api";

export const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type !== apiCallBegan.type) return next(action);

  next(action);

  const { url, data, method, onSuccess, onError } = action.payload;

  try {
    const response = await axios({
      baseURL: "http://localhost:3900/api",
      url,
      method,
      data,
    });

    //General
    dispatch(apiCallSuccess(response.data));
    //Specific
    dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    //General
    dispatch(apiCallFailed({ message: error.message }));
    //Specific
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};
