"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ExchangeItems from "./EachDetail/ExchangeItems";
import AuctionDetail from "./EachDetail/AuctionDetail";
import GroupDetail from "./EachDetail/GroupDetail";
import { DetailPropsInterface } from "../../pdp-type/DetailPropsInterface";

interface RightProps {
  getData: DetailPropsInterface | undefined;
}

export default function ShowPrice({ getData }: RightProps) {
  const activeType = useSelector((state: RootState) => state.activePage.active);

  if (!getData) {
    console.log("getData is not present while showing price. check PdpLeft");
    return null;
  }

  return (
    <>
      {activeType === "sale" && (
        <div className="text-2xl py-3">{getData?.salePrice}원</div>
      )}
      {activeType === "exchange" && <ExchangeItems target={getData?.target} />}
      {activeType === "free" && (
        <div className="text-base py-3 text-gray-500">무료 나눔</div>
      )}
      {activeType === "auction" && (
        <AuctionDetail
          increase={getData?.increasePrice}
          current={getData?.currentPrice}
          start={getData?.startPrice}
        />
      )}
      {activeType === "group" && (
        <GroupDetail
          groupPrice={getData?.groupPrice}
          totalPeople={getData?.totalPeople}
          currentPeople={getData?.currentPeople}
        />
      )}
    </>
  );
}
