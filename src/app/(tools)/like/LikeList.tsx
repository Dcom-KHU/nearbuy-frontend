"use client";

import styled from "styled-components";
import ListNav from "@/components/list/ListNav";
import List from "@/components/list/List";
import PageSort from "@/components/ui/PageSort";

const LikeListBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function LikeList() {
  return (
    <LikeListBlock>
      <ListNav />
      <List />
    </LikeListBlock>
  );
}

// const GaroLine = styled.div`
//   border-top: 1px solid rgba(0, 0, 0, 0.2);
// `;

// const ListItemBlock = styled.div`
//   //border-top: 1px solid rgba(0, 0, 0, 0.2);
//   padding: 30px 0;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   row-gap: 30px;
//   justify-items: center;
// `;

// const LikeList = () => {
//   return (
//     <LikeListBlock>
//       <ListNav />
//       {/* <List /> */}
//       {/* <div className='self-end pt-5 mr-8 w-40'> */}
//       {/* <PageSort /> */}
//       {/* </div> */}
//       <List />
//     </LikeListBlock>
//   );
// };

// export default LikeList;
