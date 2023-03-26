"use client";

import { useState } from "react";
import styled from "styled-components";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineAlert,
} from "react-icons/ai";

const ToolBoxForGuestBox = styled.div`
  display: flex;
  gap: 10px;
`;

// 게시글 주인이 아닐 때 표시하는 UI들. 찜, 공유, 신고.
export default function ToolBoxForGuest() {
  const [isLike, setIsLike] = useState(false);
  const isLikeHandler = () => {
    setIsLike((prev) => !prev);
  };

  return (
    <ToolBoxForGuestBox>
      <button className="liked" onClick={isLikeHandler}>
        {isLike && <AiFillHeart color="dimgray" size={24} />}
        {!isLike && <AiOutlineHeart color="dimgray" size={24} />}
      </button>
      <button>
        <AiOutlineShareAlt color="dimgray" size={24} />
      </button>
      <button>
        <AiOutlineAlert color="dimgray" size={25} />
      </button>
    </ToolBoxForGuestBox>
  );
}
