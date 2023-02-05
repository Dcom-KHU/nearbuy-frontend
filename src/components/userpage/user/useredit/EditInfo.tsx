'use client';

import Button from '@/components/ui/Button';
import styled from 'styled-components';
import UserPic from '../userinfo/UserPic';
import UserTemp from '../UserTemp';

const Main = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
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
  width: 50%;
  gap: 10px;
  input {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding-left: 5px;
  }
`;
const NameForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;

  button {
    position: absolute;
    bottom: -200%;
    right: -20%;
  }
`;

// 마이페이지 수정하기 - 프로필 편집
const EditInfo = () => {
  return (
    <Main>
      <UserPicBox>
        <UserPic />
        <button>프로필 사진 바꾸기</button>
      </UserPicBox>
      <UserInfoBox>
        <NameForm>
          <label htmlFor='name'>닉네임</label>
          <input id='name' type='text' placeholder='키티키티키틱' />
          <Button>수정 완료</Button>
        </NameForm>
        <UserTemp />
      </UserInfoBox>
    </Main>
  );
};
export default EditInfo;
