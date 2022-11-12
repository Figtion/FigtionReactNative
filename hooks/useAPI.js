import {
  useState,
  useEffect,
  useContext,
  useMemo,
  useRef,
  createContext,
} from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

export const AxiosContext = createContext(null);

export function useAPI({ url, method, payload, shouldExecute }) {
  const [isLoading, setLoading] = useState(false);
  const [isExecuting, setExecuting] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const toast = useToast();

  const contextInstance = useContext(AxiosContext);
  const instance = useMemo(() => {
    return contextInstance || axios;
  }, [contextInstance]);

  // const controllerRef = useRef(new AbortController());
  // const cancel = () => {
  //   controllerRef.current.abort();
  // };

  // if (shouldExecute) {
  //   setExecuting(true);
  // }

  const executeRequest = async (runtimePayload) => {
    try {
      console.log(runtimePayload);
      const response = await instance.request({
        data: {
          ...runtimePayload,
          ...payload,
        },
        // signal: controllerRef.current.signal,
        method,
        url,
      });

      setData(response.data);

      if (response.data && response.data.msg) {
        toast({
          title: response.data.msg,
          status: "success",
        });

        return response;
      }
    } catch (error) {
      console.log("testing error", error);
      setError(error.message);
      toast({
        title:
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message,
        status: "error",
      });
    }

    setLoading(false);
    setExecuting(false);
  };

  useEffect(() => {
    if (shouldExecute) {
      executeRequest();
    }
  }, [shouldExecute]);

  return {
    isLoading,
    data,
    error,
    // cancel,
    executeRequest,
  };
}
