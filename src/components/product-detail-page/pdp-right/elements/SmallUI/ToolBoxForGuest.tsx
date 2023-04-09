"use client";

import styled from "styled-components";
import { AiOutlineShareAlt } from "react-icons/ai";
import LikePost from "../LikePost";
import { ReportModal } from "../ReportPost";

const ToolBoxForGuestBox = styled.div`
  display: flex;
  gap: 10px;
`;

// 로그인 돼있지만 게시글 주인이 아닐 때 표시하는 UI들. 찜, 공유, 신고.
export default function ToolBoxForGuest({ id }: { id: number }) {
  return (
    <>
      <ToolBoxForGuestBox>
        <LikePost id={id} />
        <button title="공유" /*로그인 돼있지만 게시글 작성자가 아닐 때*/>
          <AiOutlineShareAlt color="dimgray" size={24} />
        </button>
        <ReportModal id={id} />
      </ToolBoxForGuestBox>
    </>
  );
}
