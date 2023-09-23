import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const WriteIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.2397 3.70048C17.801 3.26174 17.0897 3.26174 16.6509 3.70048L15.7013 4.65009L18.3499 7.29868L19.2995 6.34908C19.7383 5.91034 19.7383 5.19901 19.2995 4.76027L18.2397 3.70048ZM20.2693 7.31882C21.2436 6.34451 21.2436 4.76484 20.2693 3.79052L19.2095 2.73074C18.2352 1.75642 16.6555 1.75642 15.6812 2.73074L14.2474 4.16448C14.2472 4.16473 14.2469 4.16497 14.2467 4.16521C14.2465 4.16546 14.2462 4.1657 14.246 4.16595L5.33474 13.0772C5.12041 13.2915 5 13.5822 5 13.8853V16.8571C5 17.4883 5.51167 18 6.14286 18H9.1147C9.41781 18 9.7085 17.8796 9.92282 17.6653L20.2693 7.31882ZM17.3802 8.26843L14.7316 5.61983L6.37143 13.98V16.6286H9.02002L17.3802 8.26843Z"
      fill={color ?? "#191A20"}
    />
    <path d="M2 21H22" stroke="black" strokeLinecap="round" />
  </svg>
);
export default WriteIcon;
