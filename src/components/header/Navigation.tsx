import Link from 'next/link';
import styled from 'styled-components';
import Login from './Login';

const Nav = styled.nav`
  width: 70%;

  @media screen and (max-width: 695px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;

  a:hover {
    color: #9242c0;
    font-weight: bold;
  }

  @media screen and (max-width: 695px) {
    background-color: #f4e1ff;
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
