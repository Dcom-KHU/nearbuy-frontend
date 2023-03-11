'use client';

import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

// 유효성 검사를 위한 yup 라이브러리 기능 담음
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('올바른 이메일 형식이 아니에요.')
    .required('email을 입력해 주세요.'),
  password: Yup.string()
    .min(8, '안전을 위해, 8자리 이상으로 설정해주세요.')
    .max(16, '최대 16자리까지만 설정하실 수 있어요.')
    .required('password를 입력해 주세요.'),
  // 비번에 특수기호 포함하고 싶으면 아래처럼.
  // .matches(
  //   /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
  //   '알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함해야 합니다!'
  // ),
});
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('올바른 이메일 형식이 아니에요.')
    .required('email을 입력해 주세요.'),
  username: Yup.string()
    .min(2, '최소 2 글자 이상으로 지어주세요.')
    .max(10, '최대 10 글자 이하로 지어주세요.')
    .matches(/^[가-힣a-zA-Z]/, '숫자나 특수문자로 시작하실 수 없어요.')
    .matches(
      /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
      '특수문자는 포함하실 수 없어요.'
    )
    .required('닉네임을 입력해 주세요.'),
  password: Yup.string()
    .min(8, '안전을 위해, 8자리 이상으로 설정해주세요.')
    .max(16, '최대 16자리까지만 설정하실 수 있어요.')
    .required('password를 입력해 주세요.'),
  password2: Yup.string()
    .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않아요.')
    .required('password를 다시 한번 입력해 주세요.'),
});

interface LoginFormValue {
  email: string;
  username?: string;
  password: string;
  password2?: string;
}

/* 참고로 <Formik> 컴포넌트에서 initialValues와 onSubmit은 필수값.
  <Form> 아래에 <Field>를 두고 props로 name을 initialValues의 키값으로 세팅하면 
  setState과 유효성 검사가 자동 설정됨. 
  <ErrorMessage>는 yup에서 정의해둔 에러메세지 표시해주는 곳. 
*/
export default function LoginForm({ isLogIn }) {
  const handleSubmit = (values: LoginFormValue) => {
    const { email, username, password } = values;
    const data: LoginFormValue = { email, password };
    if (!isLogIn) {
      data.username = username;
    }
    console.log(data);
  };
  const loginForm = isLogIn
    ? { email: '', password: '' }
    : { email: '', username: '', password: '', password2: '' };
  return (
    <>
      <Formik
        initialValues={loginForm}
        validationSchema={isLogIn ? LoginSchema : SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <ErrorMessage
            name='email'
            component='div'
            className='text-xs text-red-500 py-1'
          />
          <Field
            name='email'
            type='email'
            placeholder='Email'
            className='login-input'
          />
          {!isLogIn && (
            <>
              <ErrorMessage
                name='username'
                component='div'
                className='text-xs text-red-500 py-1'
              />
              <Field
                name='username'
                type='text'
                placeholder='User Name'
                className='login-input'
              />
            </>
          )}
          <ErrorMessage
            name='password'
            component='div'
            className='error-m text-xs text-red-500 py-1'
          />
          <Field
            name='password'
            type='password'
            className='login-input'
            placeholder='Password'
          />
          {!isLogIn && (
            <>
              <ErrorMessage
                name='password2'
                component='div'
                className='text-xs text-red-500 py-1'
              />
              <Field
                name='password2'
                type='password'
                placeholder='Password Again'
                className='login-input'
              />
            </>
          )}

          <button className='login-button' type='submit'>
            {isLogIn ? '로그인' : '회원가입'}
          </button>
        </Form>
      </Formik>
    </>
  );
}
