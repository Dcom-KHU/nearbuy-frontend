"use client";

import { useEffect, useState } from "react";
import "./temp.css";

const ScrollTop = () => {
  // scroll-to-top 버튼은 처음엔 안보이고 스크롤이 밑으로 내려가야지 보임
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 'auto'로 놓으면 좀 딱딱하게 바로 위로 올라감
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </>
  );
};

export default ScrollTop;
