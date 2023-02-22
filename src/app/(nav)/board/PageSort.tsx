"use client";

import styled from "styled-components";

const PageSortBlock = styled.select`
  //margin-right: 150px;
  align-self: end;
  margin-right: 10vw;
  width: 180px;
  border: solid 2px gray;
`;

function PageSort() {
  return (
    <PageSortBlock>
      <option value="sort-new">최신순</option>
      <option value="sort-low">낮은가격순</option>
      <option value="sort-high">높은가격순</option>
    </PageSortBlock>
  );
}

export default PageSort;
