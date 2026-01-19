// src/redux/store.js
import { createStore } from "redux";
import libraryReducer from "./libraryReducer";

const store = createStore(libraryReducer);

export default store;
