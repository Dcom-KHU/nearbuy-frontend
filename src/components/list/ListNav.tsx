'use client';

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
  { title: '전체', type: 'board' },
  { title: '판매', type: 'sale' },
  { title: '교환', type: 'exchange' },
  { title: '나눔', type: 'free' },
  { title: '경매', type: 'auction' },
  { title: '공구', type: 'group' },
];

// 상단 네비 (전체 ~ 공구)
const ListNav = ({ activeType, setActiveType }) => {
  const activeHandler = (type: string) => {
    // 현재 마이페이지 내에서 어떤 항목을 리스팅 하고 있는지 설정
    setActiveType(type);
  };
  return (
    <Nav>
      <NavList>
        {LIST_ITEM.map(({ title, type }, i) => (
          <NavItem
            key={i}
            onClick={() => activeHandler(type)}
            active={activeType === type}
          >
            {title}
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};
export default ListNav;
