"use client";

import styled from "styled-components";
import Image from "next/image";
import WriteToggle from "../write/WriteToggle";

const MainPageBlock = styled.div`
  // background: lightblue;

  display: flex;
  width: 90%;
  padding: 40px;
  justify-content: center;
  align-items: center;

  #temp-par {
    //background-color: gold;
    padding: 0 60px;
    width: 450px;
    height: auto;
    min-width: 380px;
  }
`;

export default function MainPage() {
  return (
    <>
      <MainPageBlock>
        <Image
          src="/images/for-demo/icecream.jpg"
          alt="kitty"
          width={380}
          height={500}
        />
        <div id="temp-par">
          If you&apos;re looking for random paragraphs, you&apos;ve come to the
          right place. When a random word or a random sentence isn&apos;t quite
          enough, the next logical step is to find a random paragraph. We
          created the Random Paragraph Generator with you in mind. The process
          is quite simple. Choose the number of random paragraphs you&apos;d
          like to see and click the button. Your chosen number of paragraphs
          will instantly appear. While it may not be obvious to everyone, there
          are a number of reasons creating random paragraphs can be useful. A
          few examples of how some people use this generator are listed in the
          following paragraphs.
        </div>
        <WriteToggle />
      </MainPageBlock>
    </>
  );
}
