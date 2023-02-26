import styled from 'styled-components';
import UserName from '../userpage/user/userinfo/UserName';
import UserPic from '../userpage/user/userinfo/UserPic';

// 각 채팅별
const ChatItem = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 10px 5px;
  &:hover {
    cursor: pointer;
    background-color: #f3f3f3;
  }
`;
// 사진 오른쪽 부분(이름과 메세지 부분)
const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;
// info 아래 부분 (메세지와 시간 부분)
const MessageBox = styled.div`
  width: 100%;
  margin-top: -5px;
  color: rgb(168, 168, 168);
  display: flex;
  justify-content: space-between;
`;

export default function ChatListItem() {
  return (
    <ChatItem>
      <UserPic size={80} />
      <InfoBox>
        <UserName />
        <MessageBox>
          <p>message</p>
          <p>· 1일</p>
        </MessageBox>
      </InfoBox>
    </ChatItem>
  );
}
