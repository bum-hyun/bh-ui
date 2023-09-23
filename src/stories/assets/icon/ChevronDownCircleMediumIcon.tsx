import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const ChevronDownCircleMediumIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill={color ?? "#F9F9FD"} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.15976 10.1485C6.37277 9.9505 6.71814 9.9505 6.93115 10.1485L12 14.86L17.0689 10.1485C17.2819 9.9505 17.6272 9.9505 17.8402 10.1485C18.0533 10.3465 18.0533 10.6675 17.8402 10.8655L12.54 15.7921C12.2418 16.0693 11.7582 16.0693 11.46 15.7921L6.15976 10.8655C5.94675 10.6675 5.94675 10.3465 6.15976 10.1485Z"
      fill="#8C8F9C"
    />
  </svg>
);

export default ChevronDownCircleMediumIcon;
