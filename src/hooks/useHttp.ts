/* eslint-disable react-hooks/exhaustive-deps */
import customAxios from "@/utils/customAxios";
import axios, { AxiosHeaders, AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

interface RequestConfigType {
  url: string; // endpoint를 넣어두는 url.
  data?: Object; // parameter 말고 request body에 넣어야 하는 값을 Object 형식으로 넣어줌
  params?: Object;
  headers?: AxiosHeaders; // 아마 크게 건드릴 일 없을듯. 헤더 설정 해야할 때 넣어줘야 하는 값을 세팅.
}

// useGet은 requestConfig 파라미터를 받음.
// requestConfig의 타입은 url, data, params, header가 있음. url은 필수값이고, 나머지는 optional.
// url은 엔드포인트를 넣어두는 url임. 엔드포인트는 API 명세서에서 확인. 예시) "/api/post/sale"
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
  // useGet의 반환값은 이 세가지. data는 Response 값(API 명세서 참고)
  // isLoading은 axios 요청 날렸을 때 (API 콜 했을 때) 로딩중인지 아닌지 state을 bool 값으로 반환. 당장 쓸 일은 없을듯?
  // error 발생시 에러메시지 반환. 개발 할때 확인용으로 사용. 사실상 당장은 data를 잘 받아오는게 가장 중요함.
};

// usePost axios 생김새.얘도 requestConfig 파라미터를 받음.
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
