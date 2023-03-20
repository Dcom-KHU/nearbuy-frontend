import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

export default function EachList({ dataList }) {
  const nowState = useSelector((state: RootState) => state.activePage.active);
  return (
    <>
      {dataList.map((data) => {
        if (data.nowState === nowState) {
          return <ListItem key={data.id} nowState={data.nowState} />;
        }
        return null;
      })}
    </>
  );
}
