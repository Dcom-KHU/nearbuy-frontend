import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { serverIP } from "@/../secrets.json";
import GetToken from "@/utils/getToken";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function LikePost({ id }: { id: number }) {
  const [isLike, setIsLike] = useState<boolean | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const token = GetToken();

  const getLikeStatus = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${serverIP}/api/post/like`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { id: id },
      });
      setIsLike(response.data);
      setLoading(false);
      // console.log("찜여부:", response.data);
    } catch (error) {
      console.log("An error occurred while getting LikeStatus. ", error);
      setLoading(false);
    }
  }, [id, token]);

  useEffect(() => {
    getLikeStatus();
  }, [getLikeStatus]);

  const toggleLike = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.patch(`${serverIP}/api/post/like`, null, {
        headers: { Authorization: `Bearer ${token}` },
        params: { id: id },
      });
      setIsLike(response.data);
      setLoading(false);
    } catch (error) {
      console.log("An error occurred while trying to toggleLike. ", error);
      setLoading(false);
    }
  }, [id, token]);

  const isLikeHandler = async () => {
    await toggleLike();
    setIsLike((prev) => !prev);
    getLikeStatus();
  };

  return (
    <>
      {loading ? (
        <div>
          <AiOutlineHeart color="dimgray" size={24} />
        </div>
      ) : (
        <div
          className="liked"
          onClick={isLikeHandler}
          title="찜"
          style={{ cursor: "pointer" }}
        >
          {isLike ? (
            <AiFillHeart color="dimgray" size={24} />
          ) : (
            <AiOutlineHeart color="dimgray" size={24} />
          )}
        </div>
      )}
    </>
  );
}
