'use client';

import UserInfo from '@/components/product-detail-page/pdp-right/elements/UserInfo';
import Button from '@/components/ui/Button';
import styled from 'styled-components';

// 대화 내용
const ChatArticle = styled.article`
  width: 100%;
  height: 100vh;
  min-width: 836px;
  border: 1px solid black;
`;
const UserInfoBox = styled.div`
  padding: 0 80px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div:first-child {
    width: 73%;
  }
`;

// 채팅방
export default function ChatPage() {
  return (
    <section className='w-4/6'>
      <ChatArticle>
        <UserInfoBox>
          <div>
            <UserInfo />
          </div>
          <Button>후기 보내기</Button>
        </UserInfoBox>
        <div>거래 게시글</div>
      </ChatArticle>
    </section>
  );
}
