'use client';

import { menuToggle } from '@/store/menuToggle/menuToggleSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import '../../../../app/globals.css';

const LoginBox = styled.div`
  a:hover {
    color: var(--accent-color);
    transform: scale(1.1);
  }

  // 작은 화면
  @media screen and (max-width: 707px) {
    width: 100%;
    display: flex;
    justify-content: center;
    a:hover {
      font-weight: bold;
    }
  }
`;

// 상단 헤더 로그인-로그아웃 버튼
const Login = () => {
  // 버튼 눌렀을 때, 햄버가 창 사라지게 만듦
  // TODO: 같은 코드가 login, logo, navigation 등에서 반복돼서 사용됨. 반복 줄일 순 없을까?
  //       현재는 큰 화면에서도 toggleHandler 작동됨. (햄버거 창이 없어서 안 보일 뿐,,)
  //       작은 창에서만 toggleHandler 작동 시키게 할 순 없을까?
  const dispatch = useDispatch();
  const menuToggleHandler = () => {
    dispatch(menuToggle());
  };
  return (
    <LoginBox>
      <Link href='/login' onClick={menuToggleHandler}>
        Login
      </Link>
    </LoginBox>
  );
};
export default Login;
