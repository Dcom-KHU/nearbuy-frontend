import UserInfo from "@/components/product-detail-page/pdp-right/elements/UserInfo";
import Button from "@/components/ui/Button";
import customAxios from "@/utils/customAxios";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const UserInfoBox = styled.div`
  width: 100%;
  padding: 0 80px;
  border-bottom: 1px solid rgb(168, 168, 168);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// 유저 정보 왼쪽 부분 (유저 사진, 이름, 장소, 매너 온도)
const LeftBox = styled.div`
  width: 55%;
`;

interface IChatUserInfoProps {
  userName: string | undefined;
  memNum: number | undefined;
}

interface IUserInfo {
  name: string;
  image: string;
  location: string;
  mannerPoint: number;
}
// 채팅방 위에 뜨는 유저 정보 및 후기 보내기 버튼
export default function ChatUserInfo(props: IChatUserInfoProps) {
  const { userName, memNum } = props;

  // 현재 선택된 채팅방의 상단에 띄울 유저 정보
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  useEffect(() => {
    (async () => {
      if (memNum === 2 && userName) {
        await customAxios
          .get("/api/user/page/name", { params: { name: userName } })
          .then(data => {
            setUserInfo(data.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    })();
  }, [userName, memNum]);

  return (
    <UserInfoBox>
      {userInfo && (
        <LeftBox>
          {/* console창에 찍히는 Warning: validateDOMNesting(...): <a> caanot appear as a descendant of <a> 원인 */}
          <Link href="/my">
            <UserInfo infoData={userInfo} />
            {/* <UserInfo infoData={userInfo} /> */}
          </Link>
        </LeftBox>
      )}
      {/* <Button>후기 보내기</Button> */}
    </UserInfoBox>
  );
}
