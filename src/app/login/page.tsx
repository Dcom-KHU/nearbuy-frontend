// 로그인 페이지
// our-domain.com/login
'use client';
import LoginTitle from './LoginTitle';
import LoginContents from './LoginContents';
import styled from 'styled-components';

const LoginPageBlock = styled.div`
  width: 940px;
  margin: 0 auto;
  padding-top: 20px;

  @media screen and (max-width: 707px) {
    width: 470px;
  }
`;

export default function Login() {
  return (
    <div>
      <LoginPageBlock>
        <LoginTitle />
        <LoginContents />
      </LoginPageBlock>
    </div>
  );
}
