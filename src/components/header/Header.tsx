'use client';

import Logo from './Logo';
import styled from 'styled-components';
import Navigation from './Navigation';
import Tools from './Tools';
import MenuForSmallWindow from './MenuForSmallWindow';
import Login from './Login';

const HeaderBox = styled.div`
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

  @media screen and (max-width: 748px) {
    gap: 10px;
  }
  @media screen and (max-width: 695px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

// 상단 헤더
const Header = () => {
  return (
    <>
      <HeaderBox>
        <Logo />
        <Navigation />
        <Tools />
        <Login />
      </HeaderBox>
      <MenuForSmallWindow />
    </>
  );
};
export default Header;
