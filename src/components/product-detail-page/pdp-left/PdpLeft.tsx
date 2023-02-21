'use client';

import Image from 'next/image';
import { useState } from 'react';
import { arrayBuffer } from 'stream/consumers';
import styled from 'styled-components';

const ImageBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 20px;
`;
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
  type Key = {
    key: number;
  };
  const images = [
    { key: 0, url: '/images/block.svg' },
    { key: 1, url: '/images/setting.svg' },
    { key: 2, url: '/images/header/heart.svg' },
    { key: 3, url: '/images/header/user.svg' },
  ];
  const [isHover, setIsHover] = useState(0);
  const onMouthHandling = (key) => {
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
        {/* <Image
          src={images[0]}
          alt='block'
          width={40}
          height={40}
          onMouseOver={onMouthHandling}
        />
        <Image
          src={images[1]}
          alt='setting'
          width={40}
          height={40}
          onMouseOver={onMouthHandling1}
        />
        <Image
          src={images[2]}
          alt='heart'
          width={40}
          height={40}
          onMouseOver={onMouthHandling2}
        />
        <Image
          src={images[3]}
          alt='user'
          width={40}
          height={40}
          onMouseOver={onMouthHandling3}
        /> */}
      </SmallImageBox>
    </section>
  );
}
