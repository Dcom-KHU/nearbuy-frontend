'use client';

import Link from 'next/link';
import styled from 'styled-components';
import '../../../../app/globals.css';

const Nav = styled.nav`
  width: 200px;
  min-width: 150px;
  height: 204px;
  border: 1px solid #b69eff;
  border-radius: 8px;
  padding: 50px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 707px) {
    height: auto;
    width: 400px;
    padding: 10px;
  }
`;
const SideNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;

  a:hover {
    color: var(--accent-color);
    font-weight: bold;
  }

  @media screen and (max-width: 707px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const SideNav = () => {
  return (
    <Nav>
      <SideNavList>
        <li>
          <Link href='/my/edit'> 프로필 편집</Link>
        </li>
        <li>
          <Link href='/my/edit/password'>비밀번호 변경</Link>
        </li>
      </SideNavList>
    </Nav>
  );
};
export default SideNav;
