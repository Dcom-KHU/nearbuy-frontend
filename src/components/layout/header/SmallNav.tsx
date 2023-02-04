'use client';

import Login from './elements/Login';
import Logo from './elements/Logo';
import MenuForSmallWindow from './elements/MenuForSmallWindow';
import Navigation from './elements/Navigation';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import SearchModal from './elements/SearchModal';

const HeaderBox = styled.div`
  // 큰 화면
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 18px;
  width: 100%;
  max-width: 1200px;
  padding: 30px 20px;
  display: none;

  // 중간 화면
  @media screen and (max-width: 748px) {
    gap: 15px;
  }

  // 작은 화면
  @media screen and (max-width: 707px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
  }
`;

// 상단 헤더 (작은 화면)
const SmallNav = () => {
  const searchToggle = useSelector(
    (state: RootState) => state.searchToggle.toggle
  );
  const menuToggle = useSelector((state: RootState) => state.menuToggle.toggle);
  return (
    <>
      {searchToggle && <SearchModal />}
      {!searchToggle && (
        <>
          <HeaderBox>
            <Logo />
            {menuToggle && <Navigation />}
            {menuToggle && <Login />}
          </HeaderBox>
          <MenuForSmallWindow />
        </>
      )}
    </>
  );
};
export default SmallNav;
