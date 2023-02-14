import { Children } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";

const LoginFormContainerBlock = styled.div`
  //background-color: pink;

  .login-input {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid gray;
    width: 369px;
  }

  .login-button {
    padding: 13px;
    margin: 20px 0;
    width: 370px;

    border-radius: 5px;
    color: white;
    background-color: #1e1e1e;
  }
`;

export default function LoginFormContainer() {
  return (
    <LoginFormContainerBlock>
      <LoginForm />
    </LoginFormContainerBlock>
  );
}
