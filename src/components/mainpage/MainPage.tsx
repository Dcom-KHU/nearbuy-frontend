import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function MainPage() {
  const toggle = useSelector((state: RootState) => state.menuToggle.toggle);
  return (
    <>
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
    </>
  );
}
