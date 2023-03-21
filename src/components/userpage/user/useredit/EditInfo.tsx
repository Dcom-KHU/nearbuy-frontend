'use client';

import Button from '@/components/ui/Button';
import styled from 'styled-components';
import UserPic from '../userinfo/UserPic';
import UserTemp from '../UserTemp';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
`;
const UserPicBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    font-size: 12px;
    &:hover {
      color: var(--accent-color);
      font-weight: 700;
    }
  }
`;
const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 20px;
  input {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding-left: 5px;
  }
`;
const NameForm = styled.div`
  button {
    position: absolute;
    right: 0;
    bottom: -10%;
  }
`;

const EditSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, '최소 2 글자 이상으로 지어주세요.')
    .max(10, '최대 10 글자 이하로 지어주세요.')
    .matches(/^[가-힣a-zA-Z]/, '숫자나 특수문자로 시작하실 수 없어요.')
    .matches(
      /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]*$/,
      '특수문자는 포함하실 수 없어요.'
    )
    .required('닉네임을 입력해 주세요.'),
});
// 마이페이지 수정하기 - 프로필 편집
const EditInfo = () => {
  const initialForm = { name: 'hah' };
  const submitHandler = () => {
    alert('hah');
  };
  return (
    <Main>
      <UserPicBox>
        <UserPic />
        <button>프로필 사진 바꾸기</button>
      </UserPicBox>
      <UserInfoBox>
        <NameForm>
          <Formik
            initialValues={initialForm}
            validationSchema={EditSchema}
            onSubmit={submitHandler}
          >
            <Form>
              <ErrorMessage
                name='username'
                component='div'
                className='text-xs text-red-500 py-1'
              />
              <Field name='username' type='text' placeholder='User Name' />
              <Button>수정 완료</Button>
            </Form>
          </Formik>
        </NameForm>
        <UserTemp />
      </UserInfoBox>
    </Main>
  );
};
export default EditInfo;
