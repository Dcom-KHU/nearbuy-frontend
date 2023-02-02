'use client';

import LargeNav from './LargeNav';
import SmallNav from './SmallNav';

// 반응형 상단 헤더
const Header = () => {
  return (
    <>
      {/* 큰 화면일 때, LargeNav */}
      <LargeNav />
      {/* 작은 화면일 때, SmallNav */}
      <SmallNav />
    </>
  );
};
export default Header;
