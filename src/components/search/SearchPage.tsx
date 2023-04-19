"use client";

import { useSearchParams } from "next/navigation";

// 상세 페이지 전체 (PDP)
export default function SearchPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("q");
  /*
  useEffect(() => {
     console.log("getData결과: ", getData);
  }, [getData, getIsLoading, getError]);
 */

  return (
    <>
      <div>서치 페이지 입니다</div>
      <div>{keyword}</div>
    </>
  );
}
