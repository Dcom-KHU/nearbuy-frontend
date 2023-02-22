export default function ExchangeItems() {
  return (
    <div className='flex flex-col gap-1 text-2xl py-3'>
      <p className='text-xs text-zinc-400'>이것들과 교환하고 싶어요</p>
      <div className='flex gap-3'>
        <p>쌈장</p>
        <p>고기</p>
        <p>상추</p>
      </div>
    </div>
  );
}
