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
  const handleImageError = (event: React.SyntheticEvent<HTMLDivElement>) => {
    event.currentTarget.innerHTML = `<Image src="/images/default/error_image.png" alt="gloves" width={200} height={200} style={{ width: '20px', height: '20px'}} />`;
  };

  if (cardImg === null) {
    return (
      <Image
        src="/images/default/default_image.png"
        alt="default image"
        width={200}
        height={200}
        style={{ width: "200px", height: "200px" }}
      />
    );
  } else {
    return (
      <div onError={handleImageError}>
        <img
          src={`${serverIP}/api/image/${cardImg}`}
          alt="product image"
          width={200}
          height={200}
          style={{ width: "200px", height: "200px" }}
        />
      </div>
    );
  }
}
