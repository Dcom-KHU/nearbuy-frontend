'use client';

import UserPic from '@/components/userpage/user/userinfo/UserPic';
import Link from 'next/link';
import styled from 'styled-components';

const ChatBox = styled.div`
  display: flex;
  align-items: flex-end;
  // 내가 보낸 메세지는 오른쪽에 남이 보낸 메세지는 왼쪽에
  justify-content: ${(props) => (props.me ? 'flex-end' : 'flex-start')};
  img {
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 0; // 기본적으로 적용되어 있는 padding 없애기 위해
    margin-top: 22px;
    // 내가 보낸 메세지에는 내 프로필 사진 안 뜨게 함
    display: ${(props) => (props.me ? 'none' : 'inline-block')};
    // 남이 보낸 메세지에 마지막 대화에만 사진 뜨게 함
    visibility: ${(props) => (props.last ? 'visible' : 'hidden')};
  }
  p {
    margin-bottom: 8px;
    // 내가 보낸 메세지와 남이 보낸 메세지 색 구분
    background-color: ${(props) =>
      props.me ? '#cacaca' : 'var(--background-color)'};
    border-radius: 20px;
    padding: 16px;
    height: 46px;
    display: flex;
    align-items: center;
  }
`;
type Props = {
  last?: boolean;
  me?: boolean;
};
// 대화 내용 한 줄 한 줄
export default function Talk({ last, me }: Props) {
  return (
    <ChatBox last={last} me={me}>
      <Link href='/my'>
        <UserPic size={24} />
      </Link>
      <p>혹시 팔렸나요?</p>
    </ChatBox>
  );
}
