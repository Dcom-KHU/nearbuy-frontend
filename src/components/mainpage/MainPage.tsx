"use client";

import styled from "styled-components";
import Image from "next/image";
import { useEffect } from "react";
import { useGet, usePatch, usePost } from "@/hooks/useHttp";
import { AxiosHeaders } from "axios";

const MainBox = styled.main`
  background: ${props => props.color};
  width: 100%;
  padding: 50px 0;
`;
const MainPageBlock = styled.section`
  margin: 0 auto;
  width: 1024px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
`;

interface Itemp {
  id: number;
  detail: string;
  image: string[];
  location: string;
  ongoing: boolean;
  salePrice: number;
  tag: string[];
  time: boolean;
  title: string;
  type: string;
  writer: string;
}
export default function MainPage() {
  const {
    data: getData,
    isLoading: getIsLoading,
    error: getError,
  } = useGet<Itemp>({
    url: "/api/post/sale",
    params: { id: 1 },
  });

  useEffect(() => {
    console.log(getData, getIsLoading, getError);
  }, [getData, getIsLoading, getError]);

  const {
    data: postData,
    isLoading: postIsLoading,
    error: postError,
  } = usePost<{ accessToken: string }>({
    url: "/api/user/login",
    data: { id: 1, password: "hii" },
  });
  useEffect(() => {
    console.log(postData, postIsLoading, postError);
  }, [postData, postIsLoading, postError]);

  const requestHeaders: AxiosHeaders = new AxiosHeaders();
  requestHeaders.set("Content-Type", "application/json");
  requestHeaders.set("Authorization", "Bearer ");

  const {
    data: patchData,
    isLoading: patchIsLoading,
    error: patchError,
  } = usePatch({
    url: "/api/user/page/change",
    data: { password: "hii", newPassword: "hii", newPasswordCheck: "hii" },
    headers: requestHeaders,
  });
  useEffect(() => {
    console.log(patchData, patchIsLoading, patchError);
  }, [patchData, patchIsLoading, patchError]);

  return (
    <>
      <MainBox color="lightblue">
        <MainPageBlock>
          <Image
            src="/images/for-demo/icecream.jpg"
            alt="kitty"
            width={380}
            height={500}
          />
          <div>
            If you're looking for random paragraphs, you've come to the right
            place. When a random word or a random sentence isn't quite enough,
            the next logical step is to find a random paragraph. We created the
            Random Paragraph Generator with you in mind. The process is quite
            simple. Choose the number of random paragraphs you'd like to see and
            click the button. Your chosen number of paragraphs will instantly
            appear. While it may not be obvious to everyone, there are a number
            of reasons creating random paragraphs can be useful. A few examples
            of how some people use this generator are listed in the following
            paragraphs.
          </div>
        </MainPageBlock>
      </MainBox>
      <MainBox color="lightyellow">
        <MainPageBlock>
          <div>
            If you're looking for random paragraphs, you've come to the right
            place. When a random word or a random sentence isn't quite enough,
            the next logical step is to find a random paragraph. We created the
            Random Paragraph Generator with you in mind. The process is quite
            simple. Choose the number of random paragraphs you'd like to see and
            click the button. Your chosen number of paragraphs will instantly
            appear. While it may not be obvious to everyone, there are a number
            of reasons creating random paragraphs can be useful. A few examples
            of how some people use this generator are listed in the following
            paragraphs.
          </div>
          <Image
            src="/images/for-demo/icecream.jpg"
            alt="kitty"
            width={380}
            height={500}
          />
        </MainPageBlock>
      </MainBox>
      <MainBox color="lightpink">
        <MainPageBlock>
          <Image
            src="/images/for-demo/icecream.jpg"
            alt="kitty"
            width={380}
            height={500}
          />
          <div>
            If you're looking for random paragraphs, you've come to the right
            place. When a random word or a random sentence isn't quite enough,
            the next logical step is to find a random paragraph. We created the
            Random Paragraph Generator with you in mind. The process is quite
            simple. Choose the number of random paragraphs you'd like to see and
            click the button. Your chosen number of paragraphs will instantly
            appear. While it may not be obvious to everyone, there are a number
            of reasons creating random paragraphs can be useful. A few examples
            of how some people use this generator are listed in the following
            paragraphs.
          </div>
        </MainPageBlock>
      </MainBox>
    </>
  );
}
