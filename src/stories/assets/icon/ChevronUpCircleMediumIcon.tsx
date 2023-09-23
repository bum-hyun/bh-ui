import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const ChevronUpCircleMediumIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" transform="rotate(180 12 12)" fill={color ?? "#F9F9FD"} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.8402 13.8515C17.6272 14.0495 17.2819 14.0495 17.0689 13.8515L12 9.14L6.93115 13.8515C6.71813 14.0495 6.37277 14.0495 6.15976 13.8515C5.94675 13.6535 5.94675 13.3325 6.15976 13.1345L11.46 8.2079C11.7582 7.9307 12.2418 7.9307 12.54 8.2079L17.8402 13.1345C18.0533 13.3325 18.0533 13.6535 17.8402 13.8515Z"
      fill="#8C8F9C"
    />
  </svg>
);
export default ChevronUpCircleMediumIcon;
