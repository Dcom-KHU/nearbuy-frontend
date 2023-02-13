"use client";

import React, { ReactElement } from "react";
import styled from "styled-components";
import { Form, Formik, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

// 유효성 검사를 위한 yup 라이브러리 기능 담음
const ValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("email을 입력해주세요."),
  password: Yup.string().required("password를 입력해주세요."),
});

interface LoginFormValue {
  email: string;
  password: string;
}

const LoginFormBlock = styled.div`
  padding: 20px;

  .login-input {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid gray;
    width: 100%;
  }

  .login-button {
    padding: 10px;
    margin: 20px 0;
    border: 1px solid gray;
    width: 100%;
  }
`;

/* 참고로 <Formik> 컴포넌트에서 initialValues와 onSubmit은 필수값.
   <Form> 아래에 <Field>를 두고 props로 name을 initialValues의 키값으로 세팅하면 
   setState과 유효성 검사가 자동 설정됨. 
   <ErrorMessage>는 yup에서 정의해둔 에러메세지 표시해주는 곳. 
*/
export default function LoginForm() {
  const handleSubmit = (values: LoginFormValue) => {
    console.log(values);
  };

  return (
    <LoginFormBlock>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <ErrorMessage
            name="email"
            component="div"
            className="text-xs text-red-500 py-1"
          />
          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="login-input"
            form={""}
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-xs text-red-500 py-1"
          />
          <Field
            name="password"
            type="password"
            className="login-input"
            placeholder="Password"
          />

          <button className="login-button" type="submit">
            로그인
          </button>
        </Form>
      </Formik>
      <a href="">회원가입</a>
    </LoginFormBlock>
  );
}
