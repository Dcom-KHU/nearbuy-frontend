'use client';

import styled from 'styled-components';
import ChatListItem from './ChatListItem';

// 채팅 목록
const ChatList = styled.ul`
  width: 300px;
  height: 100vh;
  overflow: auto;
  /* border: 1px solid red; */

  @media screen and (max-width: 707px) {
    display: none;
  }
`;

// 대화 내용
const ChatArticle = styled.article`
  height: 100vh;
  width: 836px;
  border: 1px solid blue;
`;

// 채팅 페이지
export default function ChatMainPage() {
  return (
    <div className='w-4/5 h-screen flex gap-10'>
      <section>
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
        </ChatList>
      </section>
      <section>
        <ChatArticle>abc</ChatArticle>
      </section>
    </div>
  );
}
