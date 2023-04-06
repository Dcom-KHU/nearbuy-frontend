"use client";

type TellPostPriceProps = {
  type: string;
  salePrice: number | null;
  groupPrice: number | null;
  currentPrice: number | null;
};

export default function TellPostPrice({
  type,
  salePrice,
  groupPrice,
  currentPrice,
}: TellPostPriceProps) {
  switch (type) {
    case "sale":
      return <p>{salePrice}</p>;
    case "exchange":
      return <p>교환</p>;
    case "free":
      return <p>나눔</p>;
    case "auction":
      return <p>{currentPrice}</p>;
    case "group":
      return <p>{groupPrice}</p>;
    default:
      return <p>NULL</p>;
  }
}
