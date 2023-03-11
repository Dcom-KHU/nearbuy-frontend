'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { menuToggle } from '@/store/menuToggle/menuToggleSlice';
import { useDispatch } from 'react-redux';
import { searchToggle } from '@/store/searchToggle/searchToggleSlice';
import { isActive } from '@/store/detailPage/activePageSlice';

const MenuBox = styled.div`
  position: fixed;
  top: 45px;
  right: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 10%;
  z-index: 11;

  button:hover {
    transform: scale(1.2);
  }

  // 작은 화면
  @media screen and (min-width: 707px) {
    display: none;
  }
`;

// 상단 헤더 메뉴바 (작은 창일 때)
const MenuForSmallWindow = () => {
  const dispatch = useDispatch();
  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };
  const searchToggleHandler = () => {
    dispatch(searchToggle());
  };
  return (
    <MenuBox>
      <button onClick={searchToggleHandler}>
        <Image
          src='/images/header/search.svg'
          alt='search'
          width={24}
          height={21}
        />
      </button>
      <button onClick={menuToggleHandler}>
        <Image
          src='/images/header/menu.svg'
          alt='menu'
          width={24}
          height={21}
        />
      </button>
    </MenuBox>
  );
};
export default MenuForSmallWindow;
