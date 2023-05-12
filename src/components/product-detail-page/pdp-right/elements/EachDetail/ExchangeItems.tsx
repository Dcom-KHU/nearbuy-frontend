export default function ExchangeItems({ target }: { target: string }) {
  return (
    <div className="flex flex-col gap-1 text-2xl py-3">
      <p className="text-xs text-zinc-400">이것과 교환하고 싶어요</p>
      <div className="flex gap-3">
        <p>{target}</p>
      </div>
    </div>
  );
}
