"use client";

import UserPic from "@/components/userpage/user/userinfo/UserPic";
import Link from "next/link";
import styled from "styled-components";

const ChatBox = styled.div`
  display: flex;
  align-items: flex-end;
  // 내가 보낸 메세지는 오른쪽에 남이 보낸 메세지는 왼쪽에
  justify-content: ${props => (props.me ? "flex-end" : "flex-start")};
  img {
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 0; // 기본적으로 적용되어 있는 padding 없애기 위해
    margin-top: 22px;
    // 내가 보낸 메세지에는 내 프로필 사진 안 뜨게 함
    display: ${props => (props.me ? "none" : "inline-block")};
    // 남이 보낸 메세지에 마지막 대화에만 사진 뜨게 함
    visibility: ${props => (props.last ? "visible" : "hidden")};
  }
  p {
    margin-bottom: 8px;
    // 내가 보낸 메세지와 남이 보낸 메세지 색 구분
    background-color: ${props =>
      props.me ? "#cacaca" : "var(--background-color)"};
    border-radius: 20px;
    padding: 10px 16px;
    // height: 46px;
    display: flex;
    align-items: center;
    max-width: 500px;
    word-break: break-all;
  }
`;
type Props = {
  last?: boolean;
  me?: boolean;
  msg: string;
  time: number;
};
// 대화 내용 한 줄 한 줄
export default function Talk({ last, me, msg, time }: Props) {
  const setTimeHander = (time: number) => {
    return new Date(time).toLocaleString();
  };

  return (
    <div
      className={
        me ? "flex flex-row justify-end" : "flex flex-row justify-start"
      }
    >
      {me ? (
        <span className="pt-[20px] text-[#a5a5a5] mr-[5px]">
          {setTimeHander(time)}
        </span>
      ) : (
        <></>
      )}
      <ChatBox last={last} me={me}>
        {/* 해당 페이지 맨 위에 누구와 채팅하는지 사진을 볼 수 있으므로 생략,,, */}
        {/* <Link href='/my'>
        <UserPic size={24} />
      </Link> */}
        <p>{msg}</p>
      </ChatBox>
      {me === undefined ? (
        <span className="pt-[20px] text-[#a5a5a5] ml-[5px]">
          {setTimeHander(time)}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}
