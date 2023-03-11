// 로그인 페이지
// our-domain.com/login
'use client';
import LoginTitle from './LoginTitle';
import LoginContents from './LoginContents';
import styled from 'styled-components';

const LoginPageBlock = styled.div`
  margin: 0 auto;
  padding-top: 20px;
`;

export default function Login() {
  return (
    <LoginPageBlock>
      <LoginTitle />
      <LoginContents />
    </LoginPageBlock>
  );
}
