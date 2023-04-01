import ReviewItem from './ReviewItem';

const DUMMY = [
  {
    id: 1,
    emotion: 'good',
    reply: true,
    location: false,
    time: true,
    manner: true,
    detail: '답장이 빠르고 매너가 좋았어요!',
  },
  {
    id: 2,
    emotion: 'soso',
    reply: false,
    location: false,
    time: true,
    manner: true,
    detail: '답장이 조금 느린게 아쉬운 거 빼곤 나쁘지 않았어요.',
  },
];

// 리뷰 리스팅
export default function ReviewList({ dataList }) {
  return (
    <ul className='flex flex-col gap-5'>
      {DUMMY?.map(({ id, emotion, detail }) => (
        <ReviewItem key={id} id={id} emotion={emotion} detail={detail} />
      ))}
    </ul>
  );
}
