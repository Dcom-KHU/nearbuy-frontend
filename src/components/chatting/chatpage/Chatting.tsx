import Talk from './chattingitem/Talk';
import Time from './chattingitem/Time';

// 채팅 내용
export default function Chatting() {
  return (
    <div className='pt-5 px-14'>
      <Time />
      <Talk />
      <Talk last />
      <p>내 대화</p>
    </div>
  );
}
