import { combineReducers } from "redux";
import products from "./products";
import productEdit from "./productEdit";
const myReducers = combineReducers({
    products: products,
    productEdit: productEdit
});

export default myReducers;
