interface IPostTitleProps {
  title: string | undefined;
}

// 상품 제목
export default function PostTitle({ title }: IPostTitleProps) {
  return <p>{title ? title : "게시글 제목"}</p>;
}
