/* eslint-disable react-hooks/exhaustive-deps */
import customAxios from "@/utils/customAxios";
import axios, { AxiosHeaders, AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

interface RequestConfigType {
  url: string;
  data?: Object;
  params?: Object;
  headers?: AxiosHeaders;
}

export const useGet = <T>(requestConfig: RequestConfigType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<T>();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = requestConfig.params
          ? await customAxios.get<T>(requestConfig.url, {
              params: requestConfig.params,
            })
          : await customAxios.get<T>(requestConfig.url);
        setData(response.data);
      } catch (err: any) {
        setError(
          err.response.data.message ? err.response.data.message : err.message
        );
      }

      setIsLoading(false);
    })();
  }, []);

  return { data, isLoading, error };
};

export const usePost = <T>(requestConfig: RequestConfigType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<T>();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);

      // const requestHeaders: AxiosHeaders = new AxiosHeaders();
      // requestHeaders.set("Content-Type", "application/json");

      try {
        const response = await customAxios.post(
          requestConfig.url,
          requestConfig.data,
          { headers: requestConfig.headers, params: requestConfig.params }
        );
        setData(response.data);
      } catch (err: any) {
        setError(
          err.response.data.message ? err.response.data.message : err.message
        );
      }

      setIsLoading(false);
    })();
  }, []);

  return { data, isLoading, error };
};

export const usePatch = <T>(requestConfig: RequestConfigType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<T>();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await customAxios.patch(
          requestConfig.url,
          requestConfig.data,
          { headers: requestConfig.headers, params: requestConfig.params }
        );
        setData(response.data);
      } catch (err: any) {
        // console.log(err.message);
        setError(
          err.response.data.message ? err.response.data.message : err.message
        );
      }

      setIsLoading(false);
    })();
  }, []);

  return { data, isLoading, error };
};

export const useDelete = <T>(requestConfig: RequestConfigType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<T>();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await customAxios.delete(requestConfig.url, {
          data: requestConfig.data,
          headers: requestConfig.headers,
          params: requestConfig.params,
        });
        setData(response.data);
      } catch (err: any) {
        setError(
          err.response.data.message ? err.response.data.message : err.message
        );
      }

      setIsLoading(false);
    })();
  }, []);

  return { data, isLoading, error };
};
