import { RootState } from '@/store/store';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled, { CSSProperties, StyledComponentProps } from 'styled-components';
import Talk from './chattingitem/Talk';
import Time from './chattingitem/Time';

interface ChattingBoxProps extends StyledComponentProps<'div', any, {}, never> {
  toggle?: boolean;
  style?: CSSProperties;
}
const ChattingBox = styled.div<ChattingBoxProps>`
  overflow: auto;
  max-height: ${(props) =>
    props.toggle ? 'calc(100% - 268px)' : 'calc(100% - 218px)'};
  padding: 0 56px;
  padding-top: 20px;
`;
// 채팅 내용
export default function Chatting() {
  // 제품 설명 토글 시 채팅방 세로 사이즈 조절하기 위해
  const toggle = useSelector((state: RootState) => state.chatToggle.toggle);
  // 새로고침 시 제일 최근 채팅 내용이 보이도록 스크롤 제일 아래로 가게함
  const chatBoxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatBoxRef.current) {
      // null 체크를 해주어야 합니다.
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, []);
  return (
    <ChattingBox toggle={toggle} ref={chatBoxRef}>
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
