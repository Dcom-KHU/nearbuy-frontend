"use client";
import JustLogin from "./justlogin/JustLogin";
import SocialLogin from "./sociallogin/SocialLogin";

import styled from "styled-components";

const LoginContentsBlock = styled.div`
  //background: lavender;
  width: 100%;
  height: 100%;
  padding: 50px 200px;

  display: flex;
  justify-content: center;

  .vertical-line {
    background-color: lightgray;
    width: 1px;
  }
`;

export default function LoginContents() {
  return (
    <LoginContentsBlock>
      <JustLogin />
      <div className="vertical-line"></div>
      <SocialLogin />
    </LoginContentsBlock>
  );
}
