import { RootState } from "@/store/store";
import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled, { CSSProperties, StyledComponentProps } from "styled-components";
import Talk from "./chattingitem/Talk";
import Time from "./chattingitem/Time";
import customAxios from "@/utils/customAxios";
import Cookie from "js-cookie";
import { WebSocketContext } from "@/context/WebSocketContext";

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

interface IChattingProps {
  room: number | undefined;
  setOtherUser: Function;
  setPostId: Function;
  setIsNewSocketEvent: Function;
}

// 채팅 내용
export default function Chatting(props: IChattingProps) {
  const { room, setOtherUser, setPostId, setIsNewSocketEvent } = props;
  const [chatList, setChatList] = useState<IChat[]>([]);
  // 채팅 목록 불러오기
  useEffect(() => {
    if (room) {
      (async () => {
        const getChatList = await customAxios
          .get("/api/chat/list", { params: { room: room } })
          .then(data => {
            setChatList(data.data);
            setPostId(data.data.post);
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

  // chatList, myName 가져온 후, 내가 아닌 채팅방 멤버 닉네임을 가져와서 setOtherUser로 설정하기(페이지 상단 userInfo 설정 위해)
  useEffect(() => {
    chatList[0] &&
      chatList[0].userList.forEach(userName => {
        if (userName !== myName) {
          setOtherUser(userName);
        }
      });
  }, [myName, chatList]);

  // 실시간으로 채팅 메시지 받고 세팅하기
  // (만약 기존 채팅 로그가 아직 세팅되지 않았을 때 메시지가 오면 문제 발생함.
  //  기존 채팅 로그 리스트(chatList)와 실시간 채팅 리스트를 따로 관리할 필요가 있음.
  //  하지만 그럴 경우가 매우 드물기 때문에 여기서는 굳이 고려하지 않음.)
  const ws = useContext(WebSocketContext);
  ws.current.onmessage = (evt: MessageEvent) => {
    console.log("eevent");
    // 채팅방 목록 순서 바꾸기 위해 flag를 true로 변경
    setIsNewSocketEvent(true);

    const data = JSON.parse(evt.data);
    if (JSON.parse(data.room) !== room) {
      console.log(data.room, room);
      return;
    }
    const newChat = {
      id: data.id,
      sender: data.sender,
      userList: data.userList,
      message: data.message,
      room: JSON.parse(data.room),
      post: JSON.parse(data.post),
      time: JSON.parse(data.time),
      last: JSON.parse(data.last),
    };

    setChatList((prev: IChat[]) => {
      return [...prev, newChat];
    });
  };

  // 제품 설명 토글 시 채팅방 세로 사이즈 조절하기 위해
  const toggle = useSelector((state: RootState) => state.chatToggle.toggle);
  // 새로고침 시 제일 최근 채팅 내용이 보이도록 스크롤 제일 아래로 가게함
  const chatBoxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatBoxRef.current) {
      // null 체크를 해주어야 합니다.
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatList]);

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
            <Talk key={v.id} me msg={v.message} time={v.time} />
          ) : (
            <Talk key={v.id} msg={v.message} time={v.time} />
          );
        })}
    </ChattingBox>
  );
}
