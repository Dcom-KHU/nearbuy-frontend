import ReviewItem from './ReviewItem';

// 리뷰 리스팅
export default function ReviewList({ dataList }) {
  return (
    <ul className='flex flex-col gap-5'>
      {dataList?.map(({ id, emotion, detail }) => (
        <ReviewItem key={id} id={id} emotion={emotion} detail={detail} />
      ))}
    </ul>
  );
}
