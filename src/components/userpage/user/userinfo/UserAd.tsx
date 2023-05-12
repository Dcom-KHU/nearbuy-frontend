'use client';

import styled from 'styled-components';

// user 주소
const Address = styled.address`
  font-size: 10px;
  color: rgba(33, 33, 36, 0.5);
`;

interface UserAdProps {
  ad?: string;
}

export default function UserAd({ ad }: UserAdProps) {
  return <Address>{ad ?? '대한민국'}</Address>;
}
