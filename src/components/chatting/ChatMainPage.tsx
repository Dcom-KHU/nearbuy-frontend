/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import styled from "styled-components";
import ChatListItem from "./ChatListItem";
import ChatPage from "./chatpage/ChatPage";
import { useContext, useEffect, useRef, useState } from "react";
import { WebSocketContext } from "@/context/WebSocketContext";
import Cookie from "js-cookie";
import customAxios from "@/utils/customAxios";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

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

interface IchatRoom {
  id: string;
  room: number;
  sender: string;
  message: string;
  time: number;
  post: number;
  userIdList: string[];
  userNameList: string[];
}

// 채팅 페이지
export default function ChatMainPage() {
  // ws으로 메세지 받을 시 true로 변환, 채팅방 목록 업데이트 후 false로 변환
  const [isNewSocketEvent, setIsNewSocketEvent] = useState<boolean>(true);
  const [chatRooms, setChatRooms] = useState<IchatRoom[]>([]);
  // 선택된 채팅방 번호
  const [selectedRoomNum, setSelectedRoomNum] = useState<number>();

  useEffect(() => {
    if (isNewSocketEvent) {
      // 채팅방 목록 업데이트
      (async () => {
        const getChatRooms = await customAxios
          .get("/api/chat/room")
          .then(data => {
            // 최신순 정렬
            return data.data.reverse();
          });
        console.log(getChatRooms);
        setChatRooms(getChatRooms);
        selectedRoomNum === undefined &&
          setSelectedRoomNum(getChatRooms[0].room);
        // console.log(getChatRooms);
      })();

      setIsNewSocketEvent(false);
    }
  }, [isNewSocketEvent]);

  // Closing modal window when route changes
  const pathname = usePathname(); // Get current route
  // Save pathname on component mount into a REF
  const savedPathNameRef = useRef(pathname);
  const ws = useContext(WebSocketContext);
  useEffect(() => {
    window.onbeforeunload = event => {
      event.preventDefault();
      event.returnValue = "";
      ws.current.close();
    };

    // If REF has been changed, do the stuff
    if (savedPathNameRef.current !== pathname) {
      ws.current.close();
    }
  }, [pathname]);

  // // 채팅방 내부로 옮길 코드들...
  // const tmep = () => {
  //   const accessToken = Cookie.get("accessToken");

  //   ws.current.send(
  //     JSON.stringify({
  //       eventType: "getChatRoomList",
  //       accessToken: `Bearer ${accessToken}`,
  //     })
  //   );
  // };

  return (
    // <div className='w-4/5 h-screen flex gap-10 mt-10 my-0 mx-auto'>
    <ChatMainBox>
      {/* <button onClick={() => tmep()}>hi</button> */}
      <ChatList>
        {chatRooms.map((v, i) => {
          return (
            <ChatListItem
              key={v.room}
              {...v}
              setSelectedRoomNum={setSelectedRoomNum}
            />
          );
        })}
      </ChatList>
      <ChatPage
        room={selectedRoomNum}
        setIsNewSocketEvent={setIsNewSocketEvent}
      />
    </ChatMainBox>
  );
}
