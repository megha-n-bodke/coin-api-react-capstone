import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import coinData from "./redux/homepage";

const root = combineReducers({
  allcoins: coinData,
});

const store = configureStore({
  reducer: root,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
