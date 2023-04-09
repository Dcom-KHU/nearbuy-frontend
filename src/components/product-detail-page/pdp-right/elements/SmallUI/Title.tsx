"use client";

// import { useState } from "react";
import { useState, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import { serverIP } from "@/../secrets.json";
import GetToken from "@/utils/getToken";
import ToolBoxForWriter from "./ToolBoxForWriter";
import ToolBoxForGuest from "./ToolBoxForGuest";

const NameBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  p:first-child {
    margin-right: auto;
    font-size: 30px;
  }
`;

// 상세페이지 제목, 그 옆의 도구들 (찜, 공유, 신고)
export default function Title({ title, id }: { title: string; id: number }) {
  const token = GetToken();
  const [isWriter, setIsWriter] = useState<boolean>();

  // 글쓴이인지 아닌지 판단.
  const getWriterStatus = useCallback(async () => {
    try {
      const response = await axios.get(`${serverIP}/api/post/validate`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { id: id },
      });
      setIsWriter(response.data);
      // console.log("찜여부:", response.data);
    } catch (error) {
      console.log("An error occurred while getting LikeStatus. ", error);
    }
  }, [id, token]);

  getWriterStatus();

  return (
    <NameBox>
      <p>{title}</p>
      {isWriter ? <ToolBoxForWriter id={id} /> : <ToolBoxForGuest id={id} />}
    </NameBox>
  );
}
