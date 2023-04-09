import { useState } from "react";

const cls = (...classnames: string[]) => {
  return classnames.join(" ");
};

export const closeSvg = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 8L8 24M8 8L24 24"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
// 팝업 hook
export const usePopup = () => {
  const [Target, setTarget] = useState<JSX.Element | null>(null); // 표시할 타겟
  const openPopup = (target: JSX.Element) => setTarget(target); // 팝업창 여는 함수
  const closePopup = (callback?: () => void) => {
    // 팝업창 닫는 함수
    if (callback) callback();
    setTarget(null);
  };
  const isOpen = Target ? true : false;
  const component = // 실제로 타겟 담아서 띄울 팝업창
    (
      <div
        className={cls(
          " fixed z-50 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center",
          Target ? "" : "hidden"
        )}
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 50,
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
        }}
        onClick={() => setTarget(null)}
      >
        <div
          className={cls(
            " max-w-[75%] w-[1440px] max-h-[80%] h-2/3 px-10 py-10 bg-white flex flex-col rounded-[25px] relative"
          )}
          style={{
            width: 1440,
            height: 900,
            maxWidth: "75%",
            maxHeight: "80%",
            overflowY: "auto",
            overflowX: "hidden",
            padding: 40,
          }}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-end  ">
            <button
              className={cls(
                "absolute top-8 right-8 w-fit h-fit",
                Target ? "" : "hidden"
              )}
              onClick={() => closePopup()}
            >
              {closeSvg}
            </button>
          </div>
          <div
            style={{
              width: "100%",
              height: 800,
              padding: 30,
            }}
          >
            {Target}
          </div>
        </div>
      </div>
    );
  return {
    component,
    openPopup,
    closePopup,
    isOpen,
  };
};
