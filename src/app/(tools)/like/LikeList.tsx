"use client";

import styled from "styled-components";
import ListItem from "@/components/list/ListItem";
import ListNav from "@/components/list/ListNav";

const LikeListBlock = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;

const ListItemBlock = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 30px;
  justify-items: center;
`;

const LikeList = () => {
  return (
    <LikeListBlock>
      <ListNav />
      <ListItemBlock>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ListItemBlock>
    </LikeListBlock>
  );
};

export default LikeList;
