"use client";

import styled from "styled-components";
import ChatListItem from "./ChatListItem";
import ChatPage from "./chatpage/ChatPage";
import { useContext, useEffect, useState } from "react";
import { WebSocketContext } from "@/context/WebSocketContext";
import Cookie from "js-cookie";

const ChatMainBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 40px;
`;
// 채팅 목록
const ChatList = styled.section`
  width: 320px;
  height: 100vh;
  overflow: auto;
  border: 1px solid rgb(168, 168, 168);
`;

// 채팅 페이지
export default function ChatMainPage() {
  // // ws으로 메세지 받을 시 true로 변환, 채팅방 목록 업데이트 후 false로 변환
  // const [isNewSocketEvent, setIsNewSocketEvent] = useState<boolean>(false);

  // useEffect(() => {
  //   if (isNewSocketEvent) {
  //     // 채팅방 목록 업데이트
  //     const chatRooms = await
  //   }
  // }, [isNewSocketEvent])

  // 채팅방 내부로 옮길 코드들...
  const ws = useContext(WebSocketContext);

  useEffect(() => {
    if (ws) {
      // console.log("page", ws);
      const userId = Cookie.get("userId");
      const accessToken = Cookie.get("accessToken");
      // console.log(userId, accessToken);

      ws.current.send(
        JSON.stringify({
          eventType: "getChatRoomList",
          accessToken: accessToken,
        })
      );
    }
  }, [ws]);

  return (
    // <div className='w-4/5 h-screen flex gap-10 mt-10 my-0 mx-auto'>
    <ChatMainBox>
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
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </ChatList>
      <ChatPage />
    </ChatMainBox>
  );
}
