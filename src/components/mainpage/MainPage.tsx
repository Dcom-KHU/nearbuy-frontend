'use client';

import styled from 'styled-components';
import Image from 'next/image';

const MainBox = styled.main`
  background: ${(props) => props.color};
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

export default function MainPage() {
  return (
    <>
      <MainBox color='lightblue'>
        <MainPageBlock>
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
            src='/images/for-demo/icecream.jpg'
            alt='kitty'
            width={380}
            height={500}
          />
        </MainPageBlock>
      </MainBox>
      <MainBox color='lightpink'>
        <MainPageBlock>
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
