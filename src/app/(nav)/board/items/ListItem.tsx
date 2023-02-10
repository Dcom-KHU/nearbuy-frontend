"use client";

import Image from "next/image";
import styled from "styled-components";
import ItemContent from "./ItemContent";

const ListItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  padding: 15px;

  &:hover {
    transition: 0.125s ease-in;

    //transform: scale(0.99);
    transform: scale(1.01); // 없어도됨
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
`;
const ImageDeco = styled(Image)`
  // 하트~
  position: absolute;
  bottom: 110px;
  right: 8px;
`;

// 게시글 목록에서 작게 보여지는 게시글 한 개
// TODO: SVG 색칠 하기
const ListItem = () => {
  return (
    <>
      <ListItemBox>
        <Image
          src="/images/for-demo/kitty.jpg"
          alt="kitty"
          width={200}
          height={200}
        />
        <ItemContent />
        <button>
          <ImageDeco
            src="/images/header/heart.svg"
            alt="like"
            width={24}
            height={24}
          />
        </button>
      </ListItemBox>
    </>
  );
};
export default ListItem;
