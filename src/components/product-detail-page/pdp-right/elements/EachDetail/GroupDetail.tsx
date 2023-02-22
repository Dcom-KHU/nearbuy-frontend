import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

export default function GroupDetail() {
  const price = useSelector((state: RootState) => state.price.price);
  const members = useSelector((state: RootState) => state.price.members);
  return (
    <div>
      <div className='flex justify-end gap-3 mt-4 text-gray-500'>
        <p>1 / {members}</p>
        <p>모집중</p>
      </div>
      <div className='flex justify-between items-center mb-4'>
        <p className='text-2xl'>
          {price}원 (총 {price * members}원)
        </p>
        <p className='text-gray-500'>마감까지 2일 20시간</p>
      </div>
    </div>
  );
}
