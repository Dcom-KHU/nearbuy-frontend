import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { DUMMY_DATA } from './List';
import ListItem from './ListItem';

export default function EachList() {
  const nowState = useSelector((state: RootState) => state.activePage.active);
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
