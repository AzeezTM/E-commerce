//import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import rootReducers from "./index.js"


const Store = createStore(rootReducers);

export default Store;