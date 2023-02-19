'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  size?: number;
};

const ImageDeco = styled(Image)`
  padding: 0 10px 10px 10px;
  border-radius: 50%;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;

export default function UserPic({ size = 150 }: Props) {
  return (
    <Link href='#'>
      <ImageDeco
        src='/images/for-demo/kitty.jpg'
        alt='kitty'
        width={size}
        height={size}
      />
    </Link>
  );
}
