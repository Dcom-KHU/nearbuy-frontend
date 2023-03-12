// 로그인 페이지
// our-domain.com/login
'use client';
import LoginContents from '@/components/login/LoginContents';
import styled from 'styled-components';

const LoginPageBlock = styled.div`
  width: 940px;
  margin: 0 auto;
  padding-top: 50px;

  @media screen and (max-width: 707px) {
    width: 470px;
  }
`;

export default function Login({ params }: { params: { mode: string } }) {
  const { mode } = params;
  if (mode !== 'login' && mode !== 'signup') {
    throw new Error('Could not find the page.');
  }
  const isLogIn = mode === 'login';

  return (
    <div>
      <LoginPageBlock>
        {isLogIn && <p className='text-center text-xl'>로그인 해주세요</p>}
        {!isLogIn && <p className='text-center text-xl'>회원가입 해주세요</p>}
        <LoginContents isLogIn={isLogIn} />
      </LoginPageBlock>
    </div>
  );
}
