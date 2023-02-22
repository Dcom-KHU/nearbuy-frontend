'use client';

import { detailPageActions } from '@/store/detailPage/detailPageSlice';
import { menuToggleActions } from '@/store/menuToggle/menuToggleSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import '../../../../app/globals.css';

const Nav = styled.nav`
  width: 70%;

  // 작은 화면
  @media screen and (max-width: 707px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;

  a:hover {
    color: var(--accent-color);
    font-weight: bold;
  }

  // 작은 화면
  @media screen and (max-width: 707px) {
    background-color: var(--background-color);
    justify-content: space-evenly;
  }
`;

// 상단 헤더 네비 (전체 ~ 공구)
const Navigation = () => {
  const dispatch = useDispatch();
  // 작은 nav 일때, 햄버거 버튼 토글
  const menuToggleHandler = () => {
    dispatch(menuToggleActions.menuToggle());
  };
  // 판매 페이지 상태
  const isBoardHandler = () => {
    dispatch(detailPageActions.isBoard());
  };
  // 교환 페이지 상태
  const isExchangeHandler = () => {
    dispatch(detailPageActions.isExchange());
  };
  // 나눔 페이지 상태
  const isShareHandler = () => {
    dispatch(detailPageActions.isShare());
  };
  return (
    <Nav>
      <NavList>
        <li onClick={menuToggleHandler}>
          <Link href='/board'>전체</Link>
        </li>
        <li onClick={menuToggleHandler}>
          <Link href='/sale' onClick={isBoardHandler}>
            판매
          </Link>
        </li>
        <li onClick={menuToggleHandler}>
          <Link href='/exchange' onClick={isExchangeHandler}>
            교환
          </Link>
        </li>
        <li onClick={menuToggleHandler}>
          <Link href='/free' onClick={isShareHandler}>
            나눔
          </Link>
        </li>
        <li onClick={menuToggleHandler}>
          <Link href='/auction'>경매</Link>
        </li>
        <li onClick={menuToggleHandler}>
          <Link href='/group'>공구</Link>
        </li>
      </NavList>
    </Nav>
  );
};
export default Navigation;
