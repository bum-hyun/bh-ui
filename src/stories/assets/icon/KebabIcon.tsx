import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const KebabIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 20} height={height ?? 20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 15C10.3284 15 11 15.6716 11 16.5C11 17.3284 10.3284 18 9.5 18C8.67157 18 8 17.3284 8 16.5C8 15.6716 8.67157 15 9.5 15Z" fill={color ?? "#191A20"} />
    <path
      d="M9.50049 9C10.3289 9 11.0005 9.67158 11.0005 10.5C11.0005 11.3284 10.3289 12 9.50049 12C8.67206 12 8.00049 11.3284 8.00049 10.5C8.00049 9.67158 8.67206 9 9.50049 9Z"
      fill={color ?? "#191A20"}
    />
    <path
      d="M9.50029 3C10.3287 3 11.0003 3.67157 11.0003 4.5C11.0003 5.32843 10.3287 6 9.50029 6C8.67186 6 8.00029 5.32843 8.00029 4.5C8.00029 3.67157 8.67186 3 9.50029 3Z"
      fill={color ?? "#191A20"}
    />
  </svg>
);
export default KebabIcon;
