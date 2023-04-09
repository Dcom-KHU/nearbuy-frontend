import { useState, useEffect } from "react";
import axios from "axios";
import { serverIP } from "@/../secrets.json";
import GetToken from "@/utils/getToken";

interface Props {
  id: number;
}

const CheckIfWriter = ({ id }: Props): boolean | undefined => {
  const token = GetToken();
  const [isWriter, setIsWriter] = useState<boolean | undefined>();

  useEffect(() => {
    if (token != undefined) {
      const getWriterStatus = async () => {
        try {
          const response = await axios.get(`${serverIP}/api/post/validate`, {
            headers: { Authorization: `Bearer ${token}` },
            params: { id: id },
          });
          setIsWriter(response.data);
        } catch (error) {
          console.log("An error occurred while getting Writer status. ", error);
          setIsWriter(false);
        }
      };
      getWriterStatus();
    } else {
      setIsWriter(undefined);
    }
  }, [id, token]);
  return isWriter;
};

export default CheckIfWriter;
