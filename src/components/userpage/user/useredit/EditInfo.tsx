'use client';

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
    border: 1px solid black;
    border-radius: 8px;
    padding-left: 5px;
  }
`;
const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Paragraph = styled.p``;

const EditInfo = () => {
  return (
    <Main>
      <UserPicBox>
        <UserPic />
        <button>프로필 사진 바꾸기</button>
      </UserPicBox>
      <UserInfoBox>
        <NameBox>
          <label htmlFor='name'>닉네임</label>
          <input id='name' type='text' placeholder='키티키티키틱' />
        </NameBox>
        <UserTemp />
      </UserInfoBox>
    </Main>
  );
};
export default EditInfo;
