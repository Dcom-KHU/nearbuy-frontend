import UserInfo from '@/components/product-detail-page/pdp-right/elements/UserInfo';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import styled from 'styled-components';

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

// 채팅방 위에 뜨는 유저 정보 및 후기 보내기 버튼
export default function ChatUserInfo() {
  return (
    <UserInfoBox>
      <Link href='/my'>
        <UserInfo />
      </Link>
      <Button>후기 보내기</Button>
    </UserInfoBox>
  );
}
