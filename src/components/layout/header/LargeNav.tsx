'use client';

import Logo from './elements/Logo';
import styled from 'styled-components';
import Navigation from './elements/Navigation';
import Tools from './elements/Tools';
import Login from './elements/Login';

const HeaderBox = styled.div`
  // 큰 화면
  // TODO: 전체 화면 시, 양 옆 margin 부분 background-color 적용 안 됨.
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 18px;
  width: 100%;
  max-width: 1200px;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  z-index: 10;

  // 중간 화면
  @media screen and (max-width: 748px) {
    gap: 15px;
  }

  // 작은 화면
  @media screen and (max-width: 707px) {
    display: none;
  }
`;

// 상단 헤더 (큰 화면일 때)
const LargeNav = () => {
  return (
    <HeaderBox>
      <Logo />
      <Navigation />
      <Tools />
      <Login />
    </HeaderBox>
  );
};
export default LargeNav;
