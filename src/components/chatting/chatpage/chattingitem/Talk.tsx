'use client';

import UserPic from '@/components/userpage/user/userinfo/UserPic';
import styled from 'styled-components';

const ChatBox = styled.div`
  display: flex;
  align-items: flex-end;
  /* margin-left: ${(props) => props.last && '32px'}  */
  img {
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 0;
    margin-top: 22px;
    visibility: ${(props) => (props.last ? 'visible' : 'hidden')};
  }
  p {
    margin-bottom: 8px;
    background-color: var(--background-color);
    border-radius: 8px;
    padding: 16px;
    height: 46px;
    display: flex;
    align-items: center;
  }
`;
// 대화 내용 한 줄 한 줄
export default function Talk({ last }) {
  return (
    <ChatBox last={last}>
      <UserPic size={24} />
      <p>혹시 팔렸나요?</p>
    </ChatBox>
  );
}
