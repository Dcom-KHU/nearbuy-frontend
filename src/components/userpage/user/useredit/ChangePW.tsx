'use client';

import Button from '@/components/ui/Button';
import styled from 'styled-components';

const PWform = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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
  width: 80%;
  gap: 3px;

  input {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: var(--border-radius);
  }
`;

const ChangePW = () => {
  return (
    <PWform>
      <PWBox>
        <label htmlFor='nowPW'>현재 비밀번호</label>
        <input id='nowPW' type='password' />
      </PWBox>
      <PWBox>
        <label htmlFor='newPW'>새 비밀번호</label>
        <input id='newPW' type='password' />
      </PWBox>
      <PWBox>
        <label htmlFor='checkPW'>새 비밀번호 확인</label>
        <input id='checkPW' type='password' />
      </PWBox>
      <Button>수정 완료</Button>
    </PWform>
  );
};
export default ChangePW;
