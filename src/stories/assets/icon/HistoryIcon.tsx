import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const HistoryIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2297_24260)">
      <path d="M11.7207 6.66406V12.1904L16.0843 15.3913" stroke={color ?? "#191A20"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4.59171 7.40829C5.68501 5.64435 7.37183 4.3284 9.34877 3.69713C11.3257 3.06586 13.463 3.16071 15.3763 3.96461C17.2895 4.76851 18.8531 6.2287 19.7859 8.08254C20.7187 9.93639 20.9593 12.0622 20.4646 14.0777C19.9699 16.0931 18.7723 17.8659 17.0872 19.0772C15.4021 20.2885 13.3401 20.8587 11.2721 20.6854C9.20403 20.5121 7.26571 19.6066 5.80574 18.1317C4.34577 16.6568 3.45995 14.7094 3.30763 12.6397"
        stroke={color ?? "#191A20"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M4.02832 4.14453V7.96272H7.84651" stroke={color ?? "#191A20"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_2297_24260">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default HistoryIcon;
