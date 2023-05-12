import React from "react";

export interface MainInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
}

// 주로 쓸 custom input
// eslint-disable-next-line react/display-name
export const PostMainInput = React.forwardRef<HTMLInputElement, MainInputProps>(
  (props, ref) => {
    const { className = "", ...etc } = props;
    return <input className={className} {...etc} ref={ref} />;
  }
);
