import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const ChevronLeftIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 20} height={height ?? 20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 4L7 10L13 16" stroke={color ?? "#191A20"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export default ChevronLeftIcon;
