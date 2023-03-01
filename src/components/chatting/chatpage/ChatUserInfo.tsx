import UserInfo from '@/components/product-detail-page/pdp-right/elements/UserInfo';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import styled from 'styled-components';

const UserInfoBox = styled.div`
  width: 100%;
  padding: 0 80px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// 유저 정보 왼쪽 부분 (유저 사진, 이름, 장소, 매너 온도)
const LeftBox = styled.div`
  width: 55%;
`;

// 채팅방 위에 뜨는 유저 정보 및 후기 보내기 버튼
export default function ChatUserInfo() {
  return (
    <UserInfoBox>
      <LeftBox>
        <Link href='/my'>
          <UserInfo />
        </Link>
      </LeftBox>
      <Button>후기 보내기</Button>
    </UserInfoBox>
  );
}
