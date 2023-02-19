"use client";

import styled from "styled-components";
import MiniWriteToggle from "@/components/write/miniWrite/MiniWriteToggle";

const Container = styled.div`
  display: flex;
  align-self: flex-end;
  margin-right: 10vw;
`;

const PageSortBlock = styled.select`
  margin-right: 10px;
  width: 180px;
  border: solid 2px gray;
`;

const MiniWriteBlock = styled.button`
  // background-color: lime;
`;

function PageSort() {
  return (
    <Container>
      <PageSortBlock>
        <option value="sort-new">최신순</option>
        <option value="sort-low">낮은가격순</option>
        <option value="sort-high">높은가격순</option>
      </PageSortBlock>
      <MiniWriteToggle />
    </Container>
  );
}

export default PageSort;
