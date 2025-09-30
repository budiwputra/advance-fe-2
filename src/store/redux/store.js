import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer"

export default configureStore({
    reducer : {
        products : productReducer
    }
})