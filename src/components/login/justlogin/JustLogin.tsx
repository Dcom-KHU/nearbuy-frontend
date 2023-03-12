'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { isLogInProps } from '../LoginContents';
import SmallSocialLogin from '../sociallogin/SmallSocialLogin';
import LoginFormContainer from './LoginFormContainer';
// 일단 단순한 로그인 틀만 구현...

const JustLoginBlock = styled.div`
  /* background: lightgreen; */
  /* height: 300px; */
  width: 470px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 20px 50px;
  border-right: 1px solid lightgray;

  @media screen and (max-width: 707px) {
    border-right: none;
  }
`;

export default function JustLogin({ isLogIn }: isLogInProps) {
  return (
    <JustLoginBlock>
      <LoginFormContainer isLogIn={isLogIn} />
      {isLogIn && <Link href='/auth/signup'>계정이 없어요</Link>}
      {!isLogIn && <Link href='/auth/login'>로그인 할래요</Link>}
      <SmallSocialLogin />
    </JustLoginBlock>
  );
}
