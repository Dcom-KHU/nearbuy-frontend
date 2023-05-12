// 채팅 페이지
// our-domain.com/chatting

import ChatMainPage from "@/components/chatting/ChatMainPage";
import WebSocketContext from "@/context/WebSocketContext";

export default function Chat() {
  return (
    <WebSocketContext>
      <ChatMainPage />
    </WebSocketContext>
  );
}
