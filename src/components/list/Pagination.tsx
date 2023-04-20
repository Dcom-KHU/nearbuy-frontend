import styled, { css } from "styled-components";

const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

const PaginationButton = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 5px;
  &:hover {
    background-color: #f4f4f4;
  }
  ${(props) =>
    props.disabled &&
    css`
      cursor: default;
      opacity: 0.5;
      pointer-events: none;
    `}
`;

export { PaginationBox, PaginationButton };
