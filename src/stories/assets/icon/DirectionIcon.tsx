import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const DirectionIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 14} height={height ?? 14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 2V8C2 9.10457 2.89543 10 4 10H11" stroke={color ?? "#191A20"} strokeLinecap="round" />
    <path d="M9 7L11.6464 9.64645C11.8417 9.84171 11.8417 10.1583 11.6464 10.3536L9 13" stroke={color ?? "#191A20"} strokeLinecap="round" />
  </svg>
);
export default DirectionIcon;
