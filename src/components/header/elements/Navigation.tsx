'use client';

import Link from 'next/link';
import styled from 'styled-components';
import '../../../app/globals.css';

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
  return (
    <Nav>
      <NavList>
        <li>
          <Link href='#'>전체</Link>
        </li>
        <li>
          <Link href='#'>판매</Link>
        </li>
        <li>
          <Link href='#'>교환</Link>
        </li>
        <li>
          <Link href='#'>나눔</Link>
        </li>
        <li>
          <Link href='#'>경매</Link>
        </li>
        <li>
          <Link href='#'>공구</Link>
        </li>
      </NavList>
    </Nav>
  );
};
export default Navigation;
