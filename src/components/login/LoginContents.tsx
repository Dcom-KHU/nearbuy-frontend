'use client';
import JustLogin from './justlogin/JustLogin';
import SocialLogin from './sociallogin/SocialLogin';
import styled from 'styled-components';

const LoginContentsBlock = styled.div`
  //background: lavender;
  width: 100%;
  height: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 707px) {
    flex-direction: column;
  }
`;

export interface isLogInProps {
  isLogIn: boolean;
}

export default function LoginContents({ isLogIn }: isLogInProps) {
  return (
    <LoginContentsBlock>
      <JustLogin isLogIn={isLogIn} />
      <SocialLogin />
    </LoginContentsBlock>
  );
}
