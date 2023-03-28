'use client';

import { isActive } from '@/store/detailPage/activePageSlice';
import { closeMenu } from '@/store/menuToggle/menuToggleSlice';
import axios from 'axios';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import '../../../../app/globals.css';
import { serverIP } from '@/../secrets.json';
import GetToken from '@/utils/getToken';

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
  const dispatch = useDispatch();
  const loggedIn = localStorage.getItem('login') === 'true';
  const token = GetToken();

  const menuToggleHandler = async () => {
    dispatch(closeMenu());
    dispatch(isActive(null));

    if (loggedIn) {
      localStorage.removeItem('login');
      try {
        const response = await axios.post(`${serverIP}/api/user/logout`, {
          headers: { Authorization: token },
        });
        console.log('response : ', response);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <LoginBox>
      {loggedIn && <div onClick={menuToggleHandler}>Logout</div>}
      {!loggedIn && (
        <Link href='/auth/login' onClick={menuToggleHandler}>
          Login
        </Link>
      )}
    </LoginBox>
  );
};
export default Login;
