'use client';

import styled from 'styled-components';
import LargeNav from './LargeNav';
import SmallNav from './SmallNav';

const Box = styled.div`
  position: relative;
  z-index: 9;
`;

// 반응형 상단 헤더
const Header = () => {
  return (
    <Box>
      {/* 큰 화면일 때, LargeNav */}
      <LargeNav />
      {/* 작은 화면일 때, SmallNav */}
      <SmallNav />
    </Box>
  );
};
export default Header;
