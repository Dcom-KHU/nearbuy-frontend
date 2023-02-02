'use client';

import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '@/store/store';

const MainPageBox = styled.main`
  margin-top: 108px;
  // TODO: 햄버거 토글 누르면, main 내용 아래로 밀리게 하기.
`;

export default function MainPage() {
  const toggle = useSelector((state: RootState) => state.menuToggle.toggle);
  return (
    <MainPageBox>
      <h1>Hello World1</h1>
      <h1>Hello World2</h1>
      <h1>Hello World3</h1>
      <h1>Hello World4</h1>
      <h1>Hello World5</h1>
      <h1>Hello World6</h1>
      <h1>Hello World7</h1>
      <h1>Hello World8</h1>
      <h1>Hello World9</h1>
      <h1>Hello World10</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
      <h1>Hello World</h1>
    </MainPageBox>
  );
}
