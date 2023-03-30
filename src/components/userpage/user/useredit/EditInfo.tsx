'use client';

import Button from '@/components/ui/Button';
import styled from 'styled-components';
import UserPic from '../userinfo/UserPic';
import UserTemp from '../UserTemp';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios from 'axios';
import { serverIP } from '@/../secrets.json';
import { useState } from 'react';
import GetToken from '@/utils/getToken';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Cookie from 'js-cookie';

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
  gap: 20px;
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
const FileSelectBox = styled.div`
  /* width: 300px; */
  display: flex;
  justify-content: center;
  height: 30px;
  input {
    display: inline-block;
    padding: 0 10px;
    /* vertical-align: middle; */
    border: 1px solid #dddddd;
    width: 78%;
    color: #999999;
  }
  label {
    display: inline-block;
    padding-top: 3px;
    color: #fff;
    /* vertical-align: middle; */
    background-color: #999999;
    cursor: pointer;
    margin-left: 10px;
    /* font-size: 4px; */
    width: 100px;
    max-width: 150px;
    text-align: center;
  }
  input[type='file'] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
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
  const mannerPoint = useSelector(
    (state: RootState) => state.userInfo.mannerPoint
  );
  const initialForm = { name: 'user' };
  const token = GetToken();
  const userName = useSelector((state: RootState) => state.userInfo.name);
  const [profileImage, setProfileImage] = useState(null);
  const [isChange, setIsChange] = useState(false);
  const changePicHandler = () => {
    setIsChange((prev) => !prev);
  };
  const submitHandler = async (values) => {
    const userId = Cookie.get('userId');
    const formData = {
      name: values.username,
      image: profileImage?.name,
      location: '대한민국 경기도 평택시',
    };
    console.log(formData);
    console.log('token', token);

    const response = await axios.patch(`${serverIP}/api/user/page`, formData, {
      params: { id: userId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('res is : ', response);
  };
  return (
    <Main>
      <UserPicBox>
        <UserPic />
        {!isChange && (
          <button onClick={changePicHandler}>프로필 사진 바꾸기</button>
        )}
        {isChange && (
          <FileSelectBox>
            <input value={profileImage?.name} placeholder='첨부파일' readOnly />
            <label htmlFor='file'>파일선택</label>
            <input
              type='file'
              id='file'
              onChange={(e) => setProfileImage(e.target.files[0])}
            />
          </FileSelectBox>
        )}
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
              <Field name='username' type='text' placeholder={userName} />
              <Button>수정 완료</Button>
            </Form>
          </Formik>
        </NameForm>
        <UserTemp mannerPoint={mannerPoint} />
      </UserInfoBox>
    </Main>
  );
};
export default EditInfo;
