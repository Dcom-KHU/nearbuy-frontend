'use client';

import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

const SmallImageBox = styled.div`
  display: flex;
  gap: 20px;
  img:hover {
    border: 1px solid black;
    cursor: pointer;
  }
`;

// 상세페이지 사진 부분 (왼쪽 부분)
export default function PdpLeft() {
  // 사용자가 올린 사진들
  const images = [
    { key: 0, url: '/images/block.svg' },
    { key: 1, url: '/images/setting.svg' },
    { key: 2, url: '/images/header/heart.svg' },
    { key: 3, url: '/images/header/user.svg' },
  ];
  const [isHover, setIsHover] = useState(0);
  const onMouthHandling = (key: number) => {
    setIsHover(key);
  };
  return (
    <section className='flex flex-col w-2/5 gap-5'>
      <Image src={images[isHover].url} alt='Image' width={400} height={400} />
      <SmallImageBox>
        {images.map((image) => {
          return (
            <Image
              key={image.key}
              src={image.url}
              alt='block'
              width={40}
              height={40}
              onMouseOver={() => {
                onMouthHandling(image.key);
              }}
            />
          );
        })}
      </SmallImageBox>
    </section>
  );
}
