'use client';

import styled from 'styled-components';

// user 주소
const Address = styled.address`
  font-size: 10px;
  color: rgba(33, 33, 36, 0.5);
`;

export default function UserAd() {
  return <Address>경기도 고양시</Address>;
}
