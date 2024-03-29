'use client';

import styled from 'styled-components';

const ButtonUi = styled.button`
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  padding: 5px 10px;
  &:hover {
    color: var(--accent-color);
    font-weight: 700;
  }
`;

type Props = {
  type: any;
  children?: React.ReactNode;
};

// 버튼 UI
const Button: React.FC<Props> = (props) => {
  return <ButtonUi type={props.type || 'button'}>{props.children}</ButtonUi>;
};
export default Button;
