import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const ChevronUpCircleIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 32} height={height ?? 32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.4" cx="16" cy="16" r="16" transform="matrix(-4.37114e-08 1 1 4.06437e-08 0 0)" fill={color ?? "#191A20"} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.7722 18.7657C22.4685 19.0781 21.976 19.0781 21.6723 18.7657L16 12.9314L10.3277 18.7657C10.024 19.0781 9.53155 19.0781 9.22781 18.7657C8.92407 18.4533 8.92407 17.9467 9.22781 17.6343L15.45 11.2343C15.7538 10.9219 16.2462 10.9219 16.55 11.2343L22.7722 17.6343C23.0759 17.9467 23.0759 18.4533 22.7722 18.7657Z"
      fill="white"
    />
  </svg>
);
export default ChevronUpCircleIcon;
