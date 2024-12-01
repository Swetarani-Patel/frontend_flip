import { applyMiddleware, combineReducers, legacy_createStore as createrStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getProductDetailReducer, getProductsReducer, getProductByCategoryReducer } from "./reducers/productsReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
    getProductsReducer:getProductsReducer,
    getProductDetailReducer:getProductDetailReducer,
    cartReducer:cartReducer,
    getProductByCategoryReducer:getProductByCategoryReducer,
})
export const store = createrStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
