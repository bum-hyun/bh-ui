import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const ConfirmCircleIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.4" cx="12" cy="12" r="12" fill={color ?? "#191A20"} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.3052 7.93822C17.5238 8.10696 17.5642 8.42096 17.3955 8.63954L11.7344 15.9728C11.6459 16.0876 11.5119 16.1582 11.3672 16.1665C11.2225 16.1748 11.0814 16.1199 10.9803 16.0161L6.9747 11.9006C6.7821 11.7027 6.78638 11.3861 6.98427 11.1935C7.18216 11.0009 7.49871 11.0052 7.69131 11.2031L11.295 14.9056L16.6039 8.02847C16.7726 7.80989 17.0866 7.76948 17.3052 7.93822Z"
      fill="white"
    />
  </svg>
);

export default ConfirmCircleIcon;
