interface IPostDetailProps {
  detail: string | undefined;
}

const getPostTypeKor = (type: string) => {
  switch (type) {
    case "sale":
      return "판매";
    case "exchange":
      return "교환";
    case "free":
      return "나눔";
    case "auction":
      return "경매";
    case "group":
      return "공구";
  }
};

// 상품 디테일
export default function PostDetail({ detail }: IPostDetailProps) {
  return (
    <p className={"text-[#aaaaaa]"}>
      {detail ? getPostTypeKor(detail) : "포스트 타입"}
    </p>
  );
}
