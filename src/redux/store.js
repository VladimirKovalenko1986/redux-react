// import { createStore, combineReducers } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { balanceReducer } from "./balanceSlice";
import sliceBalanceRaducer from "./balanceSlice";
// import { localeReducer } from "./localeSlice";
import sliceLocale from "./localeSlice";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// !!!!!!!!!! REDUX !!!!!!!!!!!!!!
// const rootReducer = combineReducers({
//   balance: balanceReducer,
//   locale: localeReducer,
// });
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

// !!!!!! REDUX TOOLKIT !!!!!!!!!!!
const balancePersistConfig = {
  key: "balanceValue",
  storage,
  whitelist: ["value"],
};

const pBalanceReducer = persistReducer(
  balancePersistConfig,
  sliceBalanceRaducer
);

export const store = configureStore({
  reducer: {
    balance: pBalanceReducer,
    locale: sliceLocale,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
