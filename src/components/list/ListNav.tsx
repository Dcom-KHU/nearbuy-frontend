'use client';

import styled from 'styled-components';

const Nav = styled.nav`
  width: 80%;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
  padding-top: 10px;

  li:hover {
    color: var(--accent-color);
    font-weight: bold;
    cursor: pointer;
  }
`;

// 상단 네비 (전체 ~ 공구)
const ListNav = () => {
  return (
    <Nav>
      <NavList>
        <li>전체</li>
        <li>판매</li>
        <li>교환</li>
        <li>나눔</li>
        <li>경매</li>
        <li>공구</li>
      </NavList>
    </Nav>
  );
};
export default ListNav;
