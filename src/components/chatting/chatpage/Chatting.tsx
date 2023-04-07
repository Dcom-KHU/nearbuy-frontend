import { RootState } from "@/store/store";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled, { CSSProperties, StyledComponentProps } from "styled-components";
import Talk from "./chattingitem/Talk";
import Time from "./chattingitem/Time";
import customAxios from "@/utils/customAxios";
import Cookie from "js-cookie";

interface ChattingBoxProps extends StyledComponentProps<"div", any, {}, never> {
  toggle?: boolean;
  style?: CSSProperties;
}
const ChattingBox = styled.div<ChattingBoxProps>`
  overflow-y: auto;
  max-height: ${props =>
    props.toggle ? "calc(100% - 268px)" : "calc(100% - 218px)"};
  padding: 0 56px;
  padding-top: 20px;
`;

interface IChat {
  id: string;
  room: number;
  post: number;
  sender: string;
  userList: string[];
  message: string;
  time: number;
}

// 채팅 내용
export default function Chatting({ room }: { room: number | undefined }) {
  const [chatList, setChatList] = useState<IChat[]>([]);
  // 채팅 목록 불러오기
  useEffect(() => {
    if (room) {
      (async () => {
        const getChatList = await customAxios
          .get("/api/chat/list", { params: { room: room } })
          .then(data => {
            setChatList(data.data);
          })
          .catch(err => {
            console.log(err);
          });
      })();
    }
  }, [room]);

  // 해당 유저 이름
  const [myName, setMyName] = useState<string>();
  useEffect(() => {
    (async () => {
      const userId = Cookie.get("userId");
      await customAxios
        .get("/api/user/page", { params: { id: userId } })
        .then(data => {
          setMyName(data.data.name);
        })
        .catch(err => {
          console.log(err);
        });
    })();
  }, []);

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
      {chatList &&
        chatList.map((v, i) => {
          // SYSTEM의 말
          if (v.sender === null) {
            return (
              <h1 key={v.id} className="text-gray-400 text-center pt-3 pb-5">
                {v.message}
              </h1>
            );
          }

          const isImSender = myName === v.sender;
          return isImSender ? (
            <Talk me msg={v.message} time={v.time} />
          ) : (
            <Talk msg={v.message} time={v.time} />
          );
        })}
      {/* <Time />
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
      <Talk me /> */}
    </ChattingBox>
  );
}
