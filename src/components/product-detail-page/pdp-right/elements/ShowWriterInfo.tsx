import { useState, useEffect } from "react";
import axios from "axios";
import { serverIP } from "@/../secrets.json";
import UserInfo from "./UserInfo";

interface ShowWriterInfoProps {
  writer: string | undefined;
}

// 상세페이지 내 판매자 데이터 불러오기
export default function ShowWriterInfo({ writer }: ShowWriterInfoProps) {
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (writer) {
          const response = await axios.get(`${serverIP}/api/user/page/name`, {
            params: { name: writer },
          });
          setUserData(response.data);
        }
      } catch (error) {
        console.log("Error occured while getting writer data.", error);
      }
    };
    fetchData();
  }, [writer]);

  if (!userData) {
    return null;
  }

  return (
    <>
      <UserInfo infoData={userData} />
    </>
  );
}
