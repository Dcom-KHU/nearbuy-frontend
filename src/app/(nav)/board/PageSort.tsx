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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <MiniWriteToggle />
=======
      <MiniWriteBlock>+</MiniWriteBlock>
>>>>>>> d3f3eaa ([Feat/~Pages] 글쓰기 클릭시 토글 구현하고 pageSort 옆에 글쓰기 버튼 자리 만들어둠)
=======
      <MiniWriteBlock>
        <MiniWriteToggle />
      </MiniWriteBlock>
>>>>>>> ad9f05d ([Feat/Write] 페이지 필터(pagesort) 옆에 write icon과 토글 추가)
=======
      <MiniWriteBlock>
        <MiniWriteToggle />
      </MiniWriteBlock>
>>>>>>> 916b97e ([Feat/Write] 페이지 필터(pagesort) 옆에 write icon과 토글 추가)
=======
      <MiniWriteToggle />
>>>>>>> 307e869 ([Fix/Write] write 버튼 클릭시 토글에 의해 레이아웃 깨지는 현상  수정)
    </Container>
  );
}

export default PageSort;
