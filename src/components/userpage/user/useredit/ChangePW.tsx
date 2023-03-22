'use client';

import Button from '@/components/ui/Button';
import styled from 'styled-components';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { serverIP } from '@/../secrets.json';
import GetToken from '@/utils/getToken';

const PasswordSchema = Yup.object().shape({
  nowPassword: Yup.string().required('현재 비밀번호를 입력해 주세요.'),
  password: Yup.string()
    .min(8, '안전을 위해, 8자리 이상으로 설정해주세요.')
    .max(16, '최대 16자리까지만 설정하실 수 있어요.')
    .required('새 비밀번호를 입력해 주세요.'),
  passwordAgain: Yup.string()
    .oneOf([Yup.ref('password')], '비밀번호가 일치하지 않아요.')
    .required('새 비밀번호를 다시 한번 입력해 주세요.'),
});

const FormBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 600px;
  margin-bottom: 30px;
  button {
    position: absolute;
    right: 3%;
    bottom: 5%;
  }
`;
const PWBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3px;
  input {
    padding-left: 7px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: var(--border-radius);
  }
`;

interface PasswordFormValue {
  nowPassword: string;
  password: string;
  passwordAgain: string;
}
const ChangePW = () => {
  const loginForm = { nowPassword: '', password: '', passwordAgain: '' };
  const token = GetToken();
  const setPasswordHandler = async (values: PasswordFormValue) => {
    try {
      console.log(values);
      const response = await axios.patch(
        `${serverIP}/api/user/page/change`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Formik
        initialValues={loginForm}
        validationSchema={PasswordSchema}
        onSubmit={setPasswordHandler}
      >
        <Form>
          <FormBox>
            <PWBox>
              <ErrorMessage
                name='nowPassword'
                component='div'
                className='error-m text-xs text-red-500 py-1'
              />
              <Field
                name='nowPassword'
                type='password'
                placeholder='현재 비밀번호를 입력해 주세요.'
              />
            </PWBox>
            <PWBox>
              <ErrorMessage
                name='password'
                component='div'
                className='error-m text-xs text-red-500 py-1'
              />
              <Field
                name='password'
                type='password'
                placeholder='새 비밀번호를 입력해 주세요.'
              />
            </PWBox>
            <PWBox>
              <ErrorMessage
                name='passwordAgain'
                component='div'
                className='text-xs text-red-500 py-1'
              />
              <Field
                name='passwordAgain'
                type='password'
                placeholder='새 비밀번호를 다시 한번 입력해 주세요.'
              />
            </PWBox>
            <Button>수정 완료</Button>
          </FormBox>
        </Form>
      </Formik>
    </>
  );
};
export default ChangePW;
