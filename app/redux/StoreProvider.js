"use client";
//we use this component to wrap the whole next.js app and make it possible for child components to access the redux store

import { store } from "@/app/redux/store";
import { Provider } from "react-redux";

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
