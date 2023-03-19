"use client";

type TellPostPriceProps = {
  type: string;
  salePrice: number | null;
};

export default function TellPostPrice({ type, salePrice }: TellPostPriceProps) {
  switch (type) {
    case "sale":
      return <p>{salePrice}</p>;
    case "exchange":
      return <p>교환</p>;
    case "free":
      return <p>나눔</p>;
    case "auction":
      return <p>경매가격아직안넣어줌</p>;
    case "group":
      return <p>공구가아직안넣어줌</p>;
    default:
      return <p>NULL</p>;
  }
}
