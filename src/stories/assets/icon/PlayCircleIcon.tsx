import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const PlayCircleIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.4" cx="12" cy="12" r="12" fill={color ?? "#191A20"} />
    <path
      d="M16.8759 11.7743C17.0418 11.8746 17.0418 12.1254 16.8759 12.2257L9.04013 16.9647C8.87429 17.065 8.66699 16.9396 8.66699 16.739L8.66699 7.26097C8.66699 7.06037 8.87429 6.935 9.04013 7.0353L16.8759 11.7743Z"
      fill="white"
    />
  </svg>
);
export default PlayCircleIcon;
