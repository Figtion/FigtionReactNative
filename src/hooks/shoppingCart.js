import { createContext, useContext } from "react";

export const ShoppingCartContext = createContext({});

export const useShoppingCart = () => useContext(ShoppingCartContext);
