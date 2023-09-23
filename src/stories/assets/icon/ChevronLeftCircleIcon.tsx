import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const ChevronLeftCircleIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 32} height={height ?? 32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.4" cx="16" cy="16" r="16" transform="matrix(1 8.89701e-08 8.59024e-08 -1 0 32)" fill={color ?? "#191A20"} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7657 9.22781C19.0781 9.53155 19.0781 10.024 18.7657 10.3277L12.9314 16L18.7657 21.6723C19.0781 21.976 19.0781 22.4685 18.7657 22.7722C18.4533 23.0759 17.9467 23.0759 17.6343 22.7722L11.2343 16.55C10.9219 16.2462 10.9219 15.7538 11.2343 15.45L17.6343 9.22781C17.9467 8.92406 18.4533 8.92406 18.7657 9.22781Z"
      fill="white"
    />
  </svg>
);
export default ChevronLeftCircleIcon;
