interface IPostLocationProps {
  location: string | undefined;
}

// 상품 제목
export default function PostLocation({ location }: IPostLocationProps) {
  return <p>{location ? location : "거래 희망 위치"}</p>;
}
