import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const CloseIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 20} height={height ?? 20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.19526 4.19526C4.45561 3.93491 4.87772 3.93491 5.13807 4.19526L10 9.05719L14.8619 4.19526C15.1223 3.93491 15.5444 3.93491 15.8047 4.19526C16.0651 4.45561 16.0651 4.87772 15.8047 5.13807L10.9428 10L15.8047 14.8619C16.0651 15.1223 16.0651 15.5444 15.8047 15.8047C15.5444 16.0651 15.1223 16.0651 14.8619 15.8047L10 10.9428L5.13807 15.8047C4.87772 16.0651 4.45561 16.0651 4.19526 15.8047C3.93491 15.5444 3.93491 15.1223 4.19526 14.8619L9.05719 10L4.19526 5.13807C3.93491 4.87772 3.93491 4.45561 4.19526 4.19526Z"
      fill={color ?? "#191A20"}
    />
  </svg>
);
export default CloseIcon;
