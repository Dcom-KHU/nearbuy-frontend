import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

export default function Price() {
  const price = useSelector((state: RootState) => state.price.price);
  return <div className='text-2xl py-3'>{price}원</div>;
}