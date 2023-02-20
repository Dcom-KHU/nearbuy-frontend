"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const ScrollTopBlock = styled.div`
  position: fixed;
  bottom: 4vw;
  right: 12vw;

  background: #e4e4e4;
  border-radius: 50%;
  border: none;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.04);
  cursor: pointer;

  &:hover {
    background-color: gainsboro;
  }

  &:active {
    background-color: lightgray;
  }
`;

const ScrollTop = () => {
  // scroll-to-top 버튼은 처음엔 안보이고 스크롤이 밑으로 내려가야지 보임
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
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
      <ScrollTopBlock>
        {showButton && (
          <button
            onClick={scrollToTop}
            className="flex justify-center items-center w-[52px] h-[52px]"
          >
            <Image src="/images/top.svg" alt="top" width={28} height={28} />
          </button>
        )}
      </ScrollTopBlock>
    </>
  );
};

export default ScrollTop;
