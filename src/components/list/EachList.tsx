import { DetailPageState } from '@/store/detailPage/detailPageSlice';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { DUMMY_DATA } from './List';
import ListItem from './ListItem';

export default function EachList() {
  const state = useSelector((state: RootState) => state.detailPage);
  const nowState = Object.keys(state).find(
    (key) => state[key as keyof DetailPageState] === true
  );
  return (
    <>
      {DUMMY_DATA.map((data) => {
        if (data.nowState === nowState) {
          return <ListItem key={data.id} nowState={data.nowState} />;
        }
        return null;
      })}
    </>
  );
}
