'use client';

import styled from 'styled-components';

const TagItem = styled.li`
  background-color: var(--background-color);
  color: var(--accent-color);
  font-weight: 600;
  padding: 8px;
  border-radius: 8px;
`;

type Props = {
  tag: string;
};

// 각각의 태그 하나
export default function Tag({ tag }: Props) {
  return <TagItem>{tag}</TagItem>;
}
