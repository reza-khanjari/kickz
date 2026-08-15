import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import { persistStore, persistReducer } from 'redux-persist'
import { PAUSE, PERSIST, PURGE,FLUSH, REGISTER, REHYDRATE  } from "redux-persist";
import storage from "redux-persist/es/storage";

const rootReducer = combineReducers({
  cart: cartReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
