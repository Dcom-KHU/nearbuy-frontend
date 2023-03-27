'use client';

import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { isLogInProps } from '../LoginContents';
import LoginErrorModal from './LoginErrorModal';
import { serverIP } from '../../../../secrets.json';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { saveToken } from '@/store/saveToken/saveTokenSlice';

// 유효성 검사를 위한 yup 라이브러리 기능 담음
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('올바른 이메일 형식이 아니에요.')
    .required('email을 입력해 주세요.'),
  password: Yup.string().required('password를 입력해 주세요.'),
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
    .required('비밀번호를 입력해 주세요.'),
  password2: Yup.string()
    .oneOf([Yup.ref('password')], '비밀번호가 일치하지 않아요.')
    .required('비밀번호를 다시 한번 입력해 주세요.'),
});

interface LoginFormValue {
  email: string;
  username?: string;
  password: string;
  password2?: string;
}

/* 
  <Form> 아래에 <Field>를 두고 props로 name을 initialValues의 키값으로 세팅하면 
  setState과 유효성 검사가 자동 설정됨. 
  <ErrorMessage>는 yup에서 정의해둔 에러메세지 표시해주는 곳. 
*/

// 로그인/회원가입
export default function LoginForm({ isLogIn }: isLogInProps) {
  const dispatch = useDispatch();
  const mode = isLogIn ? 'login' : 'join'; // url 뒤에 붙이기 위함
  const [errorMessage, setErrorMessage] = useState(''); // error message 출력

  const handleSubmit = async (values: LoginFormValue) => {
    const { email: id, password, username: name } = values;
    const loginData = isLogIn
      ? { id, password }
      : { id, password, name, location: '경기도' };
    const redirect = isLogIn ? '/board' : '/auth/login';

    try {
      const response = await axios.post(
        `${serverIP}/api/user/${mode}`,
        loginData
      );
      console.log('response', response);

      if (response.data.accessToken) {
        localStorage.setItem('login', 'true');
        dispatch(saveToken(response.data.accessToken));
      }
      // globalThis.location.replace(redirect);
    } catch (error) {
      console.error(error);
      // 오류 발생 시
      if (error.response.status) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setErrorMessage(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.error('requst', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
      }
    }
  };

  const loginForm = isLogIn
    ? { email: '', password: '' }
    : { email: '', username: '', password: '', password2: '' };
  return (
    <>
      {errorMessage && (
        <LoginErrorModal
          setErrorMessage={setErrorMessage}
          errorMessage={errorMessage}
        />
      )}
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

          <button
            // disabled={postIsLoading}
            className='login-button'
            type='submit'
          >
            {isLogIn ? '로그인' : '회원가입'}
          </button>
        </Form>
      </Formik>
    </>
  );
}
