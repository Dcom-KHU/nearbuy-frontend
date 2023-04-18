import Image from "next/image";
import { serverIP } from "@/../secrets.json";

// 상품 메인 사진
export default function ProductMainPicture({
  size = "200px",
  cardImg,
}: {
  size?: string;
  cardImg: string | null;
}) {
  // const cardImage =

  if (cardImg === null) {
    return (
      <Image
        src="/images/default/default_image.png"
        alt="gloves"
        width={200}
        height={200}
        style={{ width: size, height: size }}
      />
    );
  } else {
    return (
      <img
        src={`${serverIP}/api/image/${cardImg}`}
        alt="image"
        width={200}
        height={200}
        style={{ width: size, height: size }}
      ></img>
    );
  }
}
