// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { waterReducer } from "./water/slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["water"], // Укажите, какие редьюсеры вы хотите сохранить
};

const persistedReducer = persistReducer(persistConfig, waterReducer);

export const store = configureStore({
  reducer: {
    water: persistedReducer,
  },
});

export const persistor = persistStore(store);
