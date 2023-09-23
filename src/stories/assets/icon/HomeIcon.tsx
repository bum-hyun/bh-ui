import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const HomeIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.6409 2.53334C12.2701 2.22437 11.7315 2.22435 11.3607 2.53329L2.35992 10.0318C2.13187 10.2218 2 10.5033 2 10.8001V21C2 21.5523 2.44772 22 3 22H7.66556C8.21784 22 8.66556 21.5523 8.66556 21V15.3333H15.3344V21C15.3344 21.5523 15.7822 22 16.3344 22H21C21.5523 22 22 21.5523 22 21V10.8001C22 10.5033 21.8682 10.2218 21.6401 10.0318L12.6409 2.53334Z"
      fill={color ?? "#191A20"}
    />
  </svg>
);
export default HomeIcon;
