'use client';

import Image from 'next/image';
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
  return (
    <ImageBox>
      <Image src='/images/block.svg' alt='block' width={400} height={400} />
      <SmallImageBox>
        <Image src='/images/block.svg' alt='block' width={40} height={40} />
        <Image src='/images/setting.svg' alt='block' width={40} height={40} />
        <Image
          src='/images/header/heart.svg'
          alt='block'
          width={40}
          height={40}
        />
        <Image
          src='/images/header/user.svg'
          alt='block'
          width={40}
          height={40}
        />
      </SmallImageBox>
    </ImageBox>
  );
}
