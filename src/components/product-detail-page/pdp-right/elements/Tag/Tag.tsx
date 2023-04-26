"use client";

import styled from "styled-components";

const TagItem = styled.li`
  background-color: var(--background-color);
  color: var(--accent-color);
  font-weight: 600;
  padding: 8px;
  border-radius: 8px;
  // FIXME: 태그 길어지면 내용 잘림
  white-space: nowrap;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  max-width: 100%; // set max-width instead of width
`;

type Props = {
  tag: string;
};

// 각각의 태그 하나
export default function Tag({ tag }: Props) {
  return <TagItem>{tag}</TagItem>;
}
