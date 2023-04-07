/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
"use client";
import { createContext, useContext, useEffect, useRef } from "react";
import secrets from "../../secrets.json";

const socketServerIP = secrets.socketServerIP;

const WebSocketContext = createContext<any>(null);

export { WebSocketContext };

export default ({ children }: { children: React.ReactNode }) => {
  // const socketContext = useContext(WebSocketContext);
  let ws = useRef<WebSocket | null>(null);

  if (!ws.current) {
    ws.current = new WebSocket(`${socketServerIP}/api/chat`);
    ws.current.onopen = () => {
      console.log("connected");
    };
    ws.current.onclose = err => {
      console.log("close");
      console.log(err);
    };
    ws.current.onerror = err => {
      console.log("error: ", err);
    };
  }

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};
