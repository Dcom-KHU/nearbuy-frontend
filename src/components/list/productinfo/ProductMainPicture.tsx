import Image from 'next/image';

// 상품 메인 사진
export default function ProductMainPicture({ size = '200px' }) {
  return (
    <Image
      src='/images/for-demo/gloves.jpg'
      alt='gloves'
      width={200}
      height={200}
      // FIXME: image 비율 깨고 200 x 200 으로 설정하기 밑에 코드는 비효율적으로 보임
      style={{ width: size, height: size }}
    />
  );
}
