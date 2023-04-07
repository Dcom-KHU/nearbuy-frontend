"use client";

import styled from "styled-components";
import UserName from "../userpage/user/userinfo/UserName";
import UserPic from "../userpage/user/userinfo/UserPic";
import { useEffect, useState } from "react";
import customAxios from "@/utils/customAxios";
import Cookie from "js-cookie";

// 각 채팅별
const ChatItem = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 10px 15px;

  &:hover {
    cursor: pointer;
    background-color: #f3f3f3;
  }
`;
// 사진 오른쪽 부분(이름과 메세지 부분)
const InfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;
// info 아래 부분 (메세지와 시간 부분)
const MessageBox = styled.div`
  width: 100%;
  margin-top: -5px;
  color: rgb(168, 168, 168);
  display: flex;
  justify-content: space-between;
`;

interface ChatListItemProps {
  room: number;
  sender: string;
  message: string;
  time: number;
  memberId?: string;
}

export default function ChatListItem(props: ChatListItemProps) {
  const { room, sender, memberId, message, time } = props;
  const [memName, setMemName] = useState<string>();
  const [memImg, setMemImg] = useState<string>();

  // 오늘로부터 며칠 전인지 구하기
  const getPrevTime = (time: number) => {
    const today = new Date().getTime();
    const diffDate = today - time;

    return Math.round(diffDate / (1000 * 60 * 60 * 24));
  };

  useEffect(() => {
    (async () => {
      // 추후 api 수정되어 memberId 받을 수 있을 때, memberId로 바꿔주기
      const userId = Cookie.get("userId");
      await customAxios
        .get("/api/user/page", { params: { id: userId } })
        .then(data => {
          setMemName(data.data.name);
          setMemImg(data.data.image);
        })
        .catch(err => {
          console.log(err);
        });
    })();
  }, []);

  return (
    <>
      <div className="flex flex-row px-[15px] py-[10px] w-[100%] items-center hover:cursor-pointer hover:bg-[#f3f3f3]">
        <UserPic size={70} image={memImg} />
        <div className="w-[75%] h-[50px] flex flex-col justify-center">
          <UserName name={memName} />
          <div className="flex flex-row justify-between text-[#a5a5a5]">
            <p className="text-ellipsis overflow-hidden w-[70%]">{message}</p>
            <p className="mr-[5px] w-[20%]">
              · {getPrevTime(time) === 0 ? "오늘" : `${getPrevTime(time)}일`}
            </p>
          </div>
        </div>
      </div>

      {/* <ChatItem>
        <UserPic size={80} />
        <InfoBox>
          <UserName />
          <MessageBox>
            <p>{message}</p>
            <p>
              · {getPrevTime(time) === 0 ? "오늘" : `${getPrevTime(time)}일`}
            </p>
          </MessageBox>
        </InfoBox>
      </ChatItem> */}
    </>
  );
}
