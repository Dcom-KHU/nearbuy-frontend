"use client";

import styled from "styled-components";
import Image from "next/image";
import WriteToggle from "../write/writeToggles/roundWrite/WriteToggle";
import { useEffect } from "react";
import { useGet, usePatch, usePost } from "@/hooks/useHttp";
import { AxiosHeaders } from "axios";

const MainBox = styled.main`
  background: ${(props) => props.color};
  width: 100%;
`;
const MainPageBlock = styled.section`
  margin: 0 auto;
  width: 1024px;
  height: 100%;
  padding: 80px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  background: ${(props) => props.color};
  div {
    min-height: 1px;
    min-width: 200px;
    max-width: 500px;
    overflow: hidden;
  }
`;

interface Itemp {
  // 언니가 정의해둔 type들
  // API 리스폰스로 오는 값들을 결과값을 받아오는 값에 대해서 type을 적어줌(?)
  //  API call response 데이터 값의 형식을 정리해서 넣어줌.
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
  // get api call 하는 방법 예시
  const {
    // 이 세개는 일단 useHttp 내의 useGet에서 주니까 받아온겨~
    data: getData,
    isLoading: getIsLoading,
    error: getError,
    // useGet 안에 Itemp로 타입을 넣어줄 수 있음. 없어도 동작하긴 하지만 있으면 나중에 쓸 일 있을테니까 일단 넣어줌. 웬만하면 넣는거 추천!
    // data의 형식을 여기에다 type으로 적어둔거임. API call response 데이터 값의 형식을 정리해서 넣어줌.
  } = useGet<Itemp>({
    // 판매 게시글 조회 API 기준 예시. API 명세서에 있는 url이 /api/post/sale임
    // useGet엔 RequestConfigType 오브젝트를 넣어줌.
    //판매 게시글 조회 할 땐 API 명세서 기준 url(필수)랑 request parameter 안에 id 넘겨줘야 함.
    url: "/api/post/sale", // 필수
    params: { id: 1 },
    // body를 넣어야 하는 경우 (예: feat/post-sale) 하단처럼 넣어줌. body는 data임!
    // data: {},
  });

  // 예시) useEffect를 통해 console.log 찍어보자
  // useGet 해서 가져와진 response 값을 찍는거. API 명세서의 response 예시 형태와 동일함
  useEffect(() => {
    console.log(getData, getIsLoading, getError);
  }, [getData, getIsLoading, getError]);

  // post api call 하는 방법 예시 - get api call과 생김새는 다르지만 쓰는 방식은 비슷하다!
  // 여기서는 feat/user-login 일반 로그인을 예시로 하겠음
  const {
    // usePost가 리턴하는 세 가지 값. 우리는 보통 data만 씀
    data: postData,
    isLoading: postIsLoading,
    error: postError,
    // 여기도 마찬가지로 accessToken: string은 꼭 없어도 됨
  } = usePost<{ accessToken: string }>({
    url: "/api/user/login", // 필수
    // API 명세서에 body 넣어달라는 요청 있으므로 명세서에서 요구한 body의 id와 password 값을 data 값으로 받아옴
    data: { id: 1, password: "hii" },
    // params: {} // 만약 파라미터 넣어달라는 요청 있으면 이렇게 넣어주면 됨
  });

  useEffect(() => {
    console.log(postData, postIsLoading, postError);
  }, [postData, postIsLoading, postError]);

  /*
    fetch는 로그인 한다음에 헤더에 accesstoken 세팅 해준다음에 요청을 보낼 수 있는 것들밖에 없어서 아직은 다룰 일 없음. 
    사용 방법은 비슷! 
  */

  return (
    <>
      <MainBox color="lightblue">
        <WriteToggle />
        <MainPageBlock color="lightblue">
          <Image
            src="/images/for-demo/icecream.jpg"
            alt="kitty"
            width={380}
            height={500}
          />
          <div>
            If you&apos;re looking for random paragraphs, you&apos;ve come to
            the right place. When a random word or a random sentence isn&apos;t
            quite enough, the next logical step is to find a random paragraph.
            We created the Random Paragraph Generator with you in mind. The
            process is quite simple. Choose the number of random paragraphs
            you&apos;d like to see and click the button. Your chosen number of
            paragraphs will instantly appear. While it may not be obvious to
            everyone, there are a number of reasons creating random paragraphs
            can be useful. A fsew examples of how some people use this generator
            are listed in the following paragraphs.
          </div>
        </MainPageBlock>
      </MainBox>
      <MainBox color="lightyellow">
        <MainPageBlock color="lightyellow">
          <div>
            If you&apos;re looking for random paragraphs, you&apos;ve come to
            the right place. When a random word or a random sentence isn&apos;t
            quite enough, the next logical step is to find a random paragraph.
            We created the Random Paragraph Generator with you in mind. The
            process is quite simple. Choose the number of random paragraphs
            you&apos;d like to see and click the button. Your chosen number of
            paragraphs will instantly appear. While it may not be obvious to
            everyone, there are a number of reasons creating random paragraphs
            can be useful. A few examples of how some people use this generator
            are listed in the following paragraphs.
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
        <MainPageBlock color="lightpink">
          <Image
            src="/images/for-demo/icecream.jpg"
            alt="kitty"
            width={380}
            height={500}
          />
          <div>
            If you&apos;re looking for random paragraphs, you&apos;ve come to
            the right place. When a random word or a random sentence isn&apos;t
            quite enough, the next logical step is to find a random paragraph.
            We created the Random Paragraph Generator with you in mind. The
            process is quite simple. Choose the number of random paragraphs
            you&apos;d like to see and click the button. Your chosen number of
            paragraphs will instantly appear. While it may not be obvious to
            everyone, there are a number of reasons creating random paragraphs
            can be useful. A few examples of how some people use this generator
            are listed in the following paragraphs.
          </div>
        </MainPageBlock>
      </MainBox>
    </>
  );
}
