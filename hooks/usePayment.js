import { useEffect, useState, useCallback } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { NextResponse } from "next/server";
import Router from "next/router";

import { useAPI } from "@/hooks/useAPI";

const usePayment = () => {
  const paymentApi = useAPI({
    url: "/payments",
    method: "POST",
    shouldExecute: false,
  });

  const checkoutWithLineItems = ({ line_items }) => {
    paymentApi.executeRequest({ line_items });
  };

  useEffect(() => {
    if (paymentApi.data && paymentApi.data.url) {
      Router.push(paymentApi.data.url);
    }
  }, [paymentApi.data]);

  return {
    checkoutWithLineItems,
  };
};

export default usePayment;
