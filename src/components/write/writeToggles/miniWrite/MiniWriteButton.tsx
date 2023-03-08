"use client";

import Image from "next/image";
import React from "react";

function MiniWriteButton(props: { onClick: () => void }) {
  return (
    <button type="button" onClick={props.onClick} className="text-red-500">
      <a target="_blank" rel="noreferrer">
        <Image
          src="/images/write.svg"
          alt="write"
          width={25}
          height={25}
          className="temp"
        />
      </a>
    </button>
  );
}

export default MiniWriteButton;
