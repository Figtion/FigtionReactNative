import { useState, useEffect, useContext, createContext } from "react";

import { useAPI } from "@/hooks/useAPI";

export const useProduct = () => {
  const productApi = useAPI({
    url: "/products",
    method: "GET",
    shouldExecute: true,
  });

  return productApi;
};
