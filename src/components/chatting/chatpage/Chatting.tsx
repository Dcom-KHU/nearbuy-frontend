import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Talk from './chattingitem/Talk';
import Time from './chattingitem/Time';

const ChattingBox = styled.div`
  overflow: auto;
  max-height: calc(100% - 268px);
  padding: 0 56px;
  padding-top: 20px;
`;
// 채팅 내용
export default function Chatting() {
  // 새로고침 시 제일 최근 채팅 내용이 보이도록 스크롤 제일 아래로 가게함
  const chatBoxRef = useRef(null);
  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, []);
  return (
    <ChattingBox ref={chatBoxRef}>
      <Time />
      <Talk />
      <Talk />
      <Talk />
      <Talk />
      <Talk last />
      <Time />
      <Talk me />
      <Talk last />
      <Talk me />
      <Time />
      <Talk me />
      <Talk me />
    </ChattingBox>
  );
}
