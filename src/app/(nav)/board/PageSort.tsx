'use client';

import styled from 'styled-components';
import MiniWriteToggle from '@/components/write/miniWrite/MiniWriteToggle';

const Container = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin-right: 12vw;
`;

const PageSortBlock = styled.select`
  border: solid 2px gray;
  padding: 0 10px;
  text-align-last: center;
`;

function PageSort() {
  return (
    <Container>
      <PageSortBlock>
        <option value='sort-new'>최신순</option>
        <option value='sort-low'>낮은가격순</option>
        <option value='sort-high'>높은가격순</option>
      </PageSortBlock>
      <MiniWriteToggle />
    </Container>
  );
}

export default PageSort;
