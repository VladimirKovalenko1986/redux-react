import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { balanceReducer } from "./balanceSlice";
import { localeReducer } from "./localeSlice";

const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: localeReducer,
});
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
