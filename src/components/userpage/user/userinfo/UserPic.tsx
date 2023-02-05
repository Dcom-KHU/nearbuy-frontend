'use client';

import Image from 'next/image';
import styled from 'styled-components';

const ImageDeco = styled(Image)`
  padding: 0 10px 10px 10px;
  border-radius: 50%;
  overflow: hidden;
`;

const UserPic = () => {
  return (
    <ImageDeco
      src='/images/for-demo/kitty.jpg'
      alt='kitty'
      width={150}
      height={150}
    />
  );
};
export default UserPic;
