"use client";

import styled from "styled-components";
import Image from "next/image";
import WriteToggle from "../write/writeToggles/roundWrite/WriteToggle";

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

export default function MainPage() {
  /* 원래 여기 useGet, usePost 등 예시랑 주석으로 설명 달아둔거 있었는데 너무 정신없을까봐 일단 치워둠*/
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
