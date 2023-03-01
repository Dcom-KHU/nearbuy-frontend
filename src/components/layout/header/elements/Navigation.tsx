'use client';

import { isActive } from '@/store/detailPage/activePageSlice';
import { closeMenu } from '@/store/menuToggle/menuToggleSlice';
import { RootState } from '@/store/store';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

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
const NavItem = styled.li<{ active?: boolean }>`
  a {
    color: ${(props) =>
      props.active ? 'var(--accent-color)' : 'var(--text-color)'};
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  }

  a:hover {
    color: var(--accent-color);
    font-weight: bold;
  }
`;

type NavItem = {
  href: string;
  label: string;
  type: string;
  active?: boolean;
};
const NAV_ITEMS: NavItem[] = [
  { href: '/board', label: '전체', type: 'board' },
  { href: '/sale', label: '판매', type: 'sale' },
  { href: '/exchange', label: '교환', type: 'exchange' },
  { href: '/free', label: '나눔', type: 'free' },
  { href: '/auction', label: '경매', type: 'auction' },
  { href: '/group', label: '공구', type: 'group' },
];

// 상단 헤더 네비 (전체 ~ 공구)
export default function Navigation() {
  const dispatch = useDispatch();
  // 현재 표시되고 있는 페이지
  const activeType = useSelector((state: RootState) => state.activePage.active);
  // 작은 nav 일때, 햄버거 버튼 토글
  const menuToggleHandler = () => {
    dispatch(closeMenu());
  };
  return (
    <Nav>
      <NavList>
        {NAV_ITEMS.map(({ href, label, type, active }) => (
          <NavItem
            key={href}
            active={activeType === type}
            onClick={menuToggleHandler}
          >
            <Link
              href={href}
              onClick={() => {
                dispatch(isActive(type)); // 현재 active 페이지
              }}
            >
              {label}
            </Link>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
}
