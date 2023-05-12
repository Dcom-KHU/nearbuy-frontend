import Image from "next/image";

// 거래희망장소
export default function Location({ location }: { location: string }) {
  return (
    <div className="flex gap-1 mb-6">
      <Image
        src="/images/map/location.svg"
        alt="location"
        width={15}
        height={15}
      />
      <p>거래희망장소&gt;&nbsp;</p>
      <p>{location}</p>
    </div>
  );
}
