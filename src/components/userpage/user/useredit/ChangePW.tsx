'use client';

import Button from '@/components/ui/Button';
import styled from 'styled-components';

const PWform = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  margin-bottom: 30px;

  button {
    position: absolute;
    bottom: -30%;
    right: -5%;
  }
`;
const PWBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  input {
    width: 90%;
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