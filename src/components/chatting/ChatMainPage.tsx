'use client';

import styled from 'styled-components';
import ChatListItem from './ChatListItem';
import ChatPage from './chatpage/ChatPage';

const ChatMainBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 40px;
`;
// 채팅 목록
const ChatList = styled.section`
  width: 320px;
  height: 100vh;
  overflow: auto;
  border: 1px solid rgb(168, 168, 168);
`;

// 채팅 페이지
export default function ChatMainPage() {
  return (
    // <div className='w-4/5 h-screen flex gap-10 mt-10 my-0 mx-auto'>
    <ChatMainBox>
      <ChatList>
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </ChatList>
      <ChatPage />
    </ChatMainBox>
  );
}
