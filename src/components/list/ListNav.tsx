'use client';

import { useState } from 'react';
import styled from 'styled-components';

interface NavItemProps {
  active: boolean;
}
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
const NavItem = styled.li<NavItemProps>`
  color: ${(props) =>
    props.active ? 'var(--accent-color)' : 'var(--text-color)'};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  &:hover {
    color: var(--accent-color);
    font-weight: bold;
    cursor: pointer;
  }
`;

const LIST_ITEM = [
  { title: '전체' },
  { title: '판매' },
  { title: '교환' },
  { title: '나눔' },
  { title: '경매' },
  { title: '공구' },
];

// 상단 네비 (전체 ~ 공구)
const ListNav = () => {
  const [activeType, setActiveType] = useState('');
  console.log(activeType);

  const activeHandler = (type: string) => {
    setActiveType(type);
  };
  return (
    <Nav>
      <NavList>
        {LIST_ITEM.map(({ title }, i) => (
          <NavItem
            key={i}
            onClick={() => activeHandler(title)}
            active={activeType === title}
          >
            {title}
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};
export default ListNav;
