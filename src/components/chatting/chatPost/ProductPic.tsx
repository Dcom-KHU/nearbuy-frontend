/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import secrets from "../../../../secrets.json";

interface IProductPicProps {
  size: string;
  image: string | undefined;
}

// 상품 메인 사진
export default function ProductPic(props: IProductPicProps) {
  const { size = "50px", image = "" } = props;

  return (
    <img
      src={
        image
          ? `${secrets.serverIP}/api/image/${image}`
          : "/images/for-demo/gloves.jpg"
      }
      alt="productImg"
      width={100}
      height={100}
      className={`w-[${size}] h-[${size}]`}
    />
  );
}
