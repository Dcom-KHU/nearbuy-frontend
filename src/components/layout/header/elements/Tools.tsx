'use client';

import { isActive } from '@/store/detailPage/activePageSlice';
import { menuToggle } from '@/store/menuToggle/menuToggleSlice';
import { searchToggle } from '@/store/searchToggle/searchToggleSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const ToolsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;

  img:hover {
    transform: scale(1.2);
  }

  // 작은 화면
  @media screen and (max-width: 707px) {
    display: none;
  }
`;

// 상단 헤더 도구들 (검색 ~ 유저)
const Tools = () => {
  const dispatch = useDispatch();
  const searchToggleHandler = () => {
    dispatch(searchToggle());
  };
  const menuToggleHandler = () => {
    dispatch(menuToggle());
    dispatch(isActive(null));
  };
  return (
    <ToolsBox>
      <button onClick={searchToggleHandler}>
        <Image
          src='/images/header/search.svg'
          alt='search'
          width={24}
          height={21}
        />
      </button>
      <Link href='/like' onClick={menuToggleHandler}>
        <Image
          src='/images/header/heart.svg'
          alt='heart'
          width={24}
          height={21}
        />
      </Link>
      <Link href='/chat' onClick={menuToggleHandler}>
        <Image
          src='/images/header/message.svg'
          alt='message'
          width={24}
          height={21}
        />
      </Link>
      <Link href='/my' onClick={menuToggleHandler}>
        <Image
          src='/images/header/user.svg'
          alt='user'
          width={24}
          height={21}
        />
      </Link>
    </ToolsBox>
  );
};
export default Tools;
