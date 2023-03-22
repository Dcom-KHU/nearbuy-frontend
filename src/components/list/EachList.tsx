import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

export default function EachList({ dataList, activeType }) {
  let nowState = useSelector((state: RootState) => state.activePage.active);
  if (activeType) {
    nowState = activeType;
  }
  console.log('aa', dataList);

  return (
    <>
      {dataList?.map((data) => {
        if (data.type === nowState) {
          return <ListItem key={data.id} nowState={data.type} />;
        }
        return null;
      })}
    </>
  );
}
