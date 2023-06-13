import { combineReducers } from "redux";
import authSlice from "../slices/AuthSlice";
// import userReducer from "../slices/userReducer";


const reducers = combineReducers({
  auth: authSlice,
  
});

export type State = ReturnType<typeof reducers>;
export default reducers;