import { useEffect, useState, useCallback } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { NextResponse } from "next/server";
import Router from "next/router";

import { useAPI } from "@/hooks/useAPI";

const useOrder = (customerID) => {
  const orderAPI = useAPI({
    url: `/orders/${customerID}`,
    method: "GET",
    shouldExecute: true,
  });

  return orderAPI;
};

export default useOrder;
