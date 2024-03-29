import styled from 'styled-components';
import { isLogInProps } from '../LoginContents';
import LoginForm from './LoginForm';

const LoginFormContainerBlock = styled.div`
  /* background-color: pink; */
  width: 370px;
  .login-input {
    padding: 10px;
    margin-left: 2px;
    margin-bottom: 20px;
    border: 1px solid gray;
    width: 100%;
  }

  .login-button {
    padding: 13px;
    margin: 20px 0;
    width: 100%;

    border-radius: 5px;
    color: white;
    background-color: #1e1e1e;

    &:active {
      background-color: #373737;
    }
  }
`;

export default function LoginFormContainer({ isLogIn }: isLogInProps) {
  return (
    <LoginFormContainerBlock isLogin={isLogIn}>
      <LoginForm isLogIn={isLogIn} />
    </LoginFormContainerBlock>
  );
}
