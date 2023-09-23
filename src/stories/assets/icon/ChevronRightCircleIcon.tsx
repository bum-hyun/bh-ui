import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const ChevronRightCircleIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 32} height={height ?? 32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.4" cx="16" cy="16" r="16" transform="rotate(180 16 16)" fill={color ?? "#191A20"} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.2343 9.22781C13.5467 8.92406 14.0533 8.92406 14.3657 9.22781L20.7657 15.45C21.0781 15.7538 21.0781 16.2462 20.7657 16.55L14.3657 22.7722C14.0533 23.0759 13.5467 23.0759 13.2343 22.7722C12.9219 22.4685 12.9219 21.976 13.2343 21.6723L19.0686 16L13.2343 10.3277C12.9219 10.024 12.9219 9.53155 13.2343 9.22781Z"
      fill="white"
    />
  </svg>
);

export default ChevronRightCircleIcon;
