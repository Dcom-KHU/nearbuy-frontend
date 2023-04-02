export default function GroupDetail({
  groupPrice,
  totalPeople,
  currentPeople,
}: {
  groupPrice: number;
  totalPeople: number;
  currentPeople: number;
}) {
  return (
    <div>
      <div className="flex justify-end gap-3 mt-4 text-gray-500">
        <p>
          {" "}
          {currentPeople ? currentPeople : "null임"} / {totalPeople}
        </p>
        <p>모집중</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-2xl">
          {groupPrice / totalPeople}원 (총 {groupPrice}원)
        </p>
        <p className="text-gray-500">마감까지 2일 20시간</p>
      </div>
    </div>
  );
}
