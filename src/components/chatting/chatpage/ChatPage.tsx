"use client";

import styled from "styled-components";
import ChatUserInfo from "./ChatUserInfo";
import ChatProductInfo from "./ChatProductInfo";
import Chatting from "./Chatting";
import ChatWindow from "./chattingitem/ChatWindow";
import { useContext, useState } from "react";
import { WebSocketContext } from "@/context/WebSocketContext";

// 대화 내용
const ChatMain = styled.main`
  width: 100%;
  height: 100%;
  /* min-width: 780px; */
  border: 1px solid rgb(168, 168, 168);
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
`;

interface IChatPage {
  selectedRoom: number | undefined;
  setIsNewSocketEvent: Function;
}

// 채팅방
export default function ChatPage(props: IChatPage) {
  const { selectedRoom, setIsNewSocketEvent } = props;

  // ChatUserInfo에서 사용
  const [otherUser, setOtherUser] = useState<string>();
  const [memNum, setMemNum] = useState<number>();
  // ChatProductInfo에서 사용
  const [postId, setPostId] = useState<number>();

  return (
    <section className="w-4/6">
      <ChatMain>
        <ChatUserInfo userName={otherUser} memNum={memNum} />
        <ChatProductInfo postId={postId} />
        <Chatting
          room={selectedRoom}
          setOtherUser={setOtherUser}
          setMemNum={setMemNum}
          setPostId={setPostId}
          setIsNewSocketEvent={setIsNewSocketEvent}
        />
        <ChatWindow room={selectedRoom} />
      </ChatMain>
    </section>
  );
}
