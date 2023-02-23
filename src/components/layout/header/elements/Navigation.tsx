'use client';

import { setIsType } from '@/store/detailPage/detailPageSlice';
import { closeMenu } from '@/store/menuToggle/menuToggleSlice';
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
// FIXME: 밑에 handler들 각각 만들지 말고, 하나로 뭉치는 등, 더 깔끔하게 할 순 없을까?
const Navigation = () => {
  const dispatch = useDispatch();
  // 작은 nav 일때, 햄버거 버튼 토글
  const menuToggleHandler = () => {
    dispatch(closeMenu());
  };
  // 판매 페이지 상태
  const isSaleHandler = () => {
    dispatch(setIsType('sale'));
  };
  // 교환 페이지 상태
  const isExchangeHandler = () => {
    dispatch(setIsType('exchange'));
  };
  // 나눔 페이지 상태
  const isFreeHandler = () => {
    dispatch(setIsType('free'));
  };
  // 경매 페이지 상태
  const isAuctionHandler = () => {
    dispatch(setIsType('auction'));
  };
  // 공구 페이지 상태
  const isGroupHandler = () => {
    dispatch(setIsType('group'));
  };
  return (
    <Nav>
      <NavList>
        <li onClick={menuToggleHandler}>
          <Link href='/board'>전체</Link>
        </li>
        <li onClick={menuToggleHandler}>
          <Link href='/sale' onClick={isSaleHandler}>
            판매
          </Link>
        </li>
        <li onClick={menuToggleHandler}>
          <Link href='/exchange' onClick={isExchangeHandler}>
            교환
          </Link>
        </li>
        <li onClick={menuToggleHandler}>
          <Link href='/free' onClick={isFreeHandler}>
            나눔
          </Link>
        </li>
        <li onClick={menuToggleHandler}>
          <Link href='/auction' onClick={isAuctionHandler}>
            경매
          </Link>
        </li>
        <li onClick={menuToggleHandler}>
          <Link href='/group' onClick={isGroupHandler}>
            공구
          </Link>
        </li>
      </NavList>
    </Nav>
  );
};
export default Navigation;
