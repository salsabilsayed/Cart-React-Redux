import { applyMiddleware, createStore,compose } from "redux";
import cartReducer from "./reducer";
import thunk from "redux-thunk";

const store = createStore(cartReducer,compose(applyMiddleware(thunk)));

export default store;