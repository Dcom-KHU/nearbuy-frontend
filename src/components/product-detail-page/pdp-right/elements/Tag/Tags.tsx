"use client";

import Tag from "./Tag";
import styled from "styled-components";

// FIXME: minmax를 60px로 설정해놔서 길이가 그 이상 넘어가면 박스 벗어남
const TagList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  gap: 10px;
  text-align: center;
`;

// *******************************
// 카테고리랑 태그랑 둘 다 하는 건가??? 🤔
// *******************************

// 태그들
export default function Tags({ tagArr }: { tagArr: string[] }) {
  const arr = tagArr;
  return (
    <TagList>
      {arr.map((data) => (
        <Tag key={data} tag={data} />
      ))}
    </TagList>
  );
}
