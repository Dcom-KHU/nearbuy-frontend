'use client';

import { isActive } from '@/store/detailPage/activePageSlice';
import { closeMenu } from '@/store/menuToggle/menuToggleSlice';
import { searchToggle } from '@/store/searchToggle/searchToggleSlice';
import { getToken } from '@/utils/getToken';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const ToolsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;

  img:hover {
    transform: scale(1.2);
    cursor: pointer;
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
  const router = useRouter();
  const menuToggleHandler = () => {
    dispatch(closeMenu());
    dispatch(isActive('board')); // 일단 userpage나 like page에서 게시글 list 보여주기 위해 'board'로 함.
  };
  const myPageHandler = () => {
    const token = getToken();
    console.log(token);

    dispatch(closeMenu());
    if (!token) {
      console.log('haha');
      window.location.replace('http://localhost:3000/auth/login');
    }
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
      <Link href='/chatting' onClick={menuToggleHandler}>
        <Image
          src='/images/header/message.svg'
          alt='message'
          width={24}
          height={21}
        />
      </Link>
      <Link href='/my' onClick={myPageHandler}>
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
