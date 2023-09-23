import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const LikeOnIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 20L10.695 18.7827C4.8 13.2219 3 12.5487 3 9.07205C3 6.22248 5.178 4 7.95 4C9.516 4 11.019 4.74697 12 5.91816C12.981 4.74697 14.484 4 16.05 4C18.822 4 21 6.22248 21 9.07205C21 12.5487 18.3 13.683 13.305 18.7827L12 20Z"
      strokeWidth="1.5"
      strokeLinejoin="round"
      stroke={color ?? "red"}
      fill={color ?? "red"}
    />
  </svg>
);

export default LikeOnIcon;
