'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { useEffect } from 'react';
import { useGet, usePatch, usePost } from '@/hooks/useHttp';
import { AxiosHeaders } from 'axios';

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
  // get api call 하는 방법
  // const {
  //   data: getData,
  //   isLoading: getIsLoading,
  //   error: getError,
  // } = useGet<Itemp>({
  //   url: '/api/post/sale',
  //   params: { id: 1 },
  // });
  // const getDataTitle = getData?.title;

  // useEffect(() => {
  //   console.log(getData, getIsLoading, getError);
  // }, [getData, getIsLoading, getError]);

  // post api call 하는 방법
  // const {
  //   data: postData,
  //   isLoading: postIsLoading,
  //   error: postError,
  // } = usePost<{ accessToken: string }>({
  //   url: '/api/user/login',
  //   data: { id: 'aa@aa', password: 'aaaaaaaa' },
  // });
  // const {
  //   data: postData,
  //   isLoading: postIsLoading,
  //   error: postError,
  // } = usePost<{ accessToken: string }>({
  //   url: '/api/user/join',
  //   data: { id: 'qq@qq', password: 'qqqqqqqq', name: 'qq', location: 'qq' },
  // });

  // useEffect(() => {
  //   console.log(postData, postIsLoading, postError);
  // }, [postData, postIsLoading, postError]);

  // const options = {
  //   enableHighAccuracy: true,
  //   timeout: 5000,
  //   maximumAge: 0,
  // };

  // function success(pos) {
  //   const crd = pos.coords;
  //   console.log('your curren position is:');
  //   console.log(`latitude : ${crd.latitude}`);
  //   console.log(`latitude : ${crd.longitude}`);
  //   console.log(`more or less ${crd.accuracy} meters.`);
  // }

  // function error(err) {
  //   console.warn(`ERROR(${err.code}): ${err.message}`);
  // }

  // navigator.geolocation.getCurrentPosition(success, error, options);
  return (
    <>
      <MainBox color='lightblue'>
        <MainPageBlock color='lightblue'>
          <Image
            src='/images/for-demo/icecream.jpg'
            alt='kitty'
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
      <MainBox color='lightyellow'>
        <MainPageBlock color='lightyellow'>
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
            src='/images/for-demo/icecream.jpg'
            alt='kitty'
            width={380}
            height={500}
          />
        </MainPageBlock>
      </MainBox>
      <MainBox color='lightpink'>
        <MainPageBlock color='lightpink'>
          <Image
            src='/images/for-demo/icecream.jpg'
            alt='kitty'
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
