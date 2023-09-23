import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const CalendarIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 20} height={height ?? 20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.61538 4.24354C4.08434 4.24354 3.65385 4.65568 3.65385 5.16408V15.4742C3.65385 15.9826 4.08434 16.3947 4.61538 16.3947H15.3846C15.9157 16.3947 16.3462 15.9826 16.3462 15.4742V5.16408C16.3462 4.65568 15.9157 4.24354 15.3846 4.24354H4.61538ZM2.5 5.16408C2.5 4.04559 3.44709 3.13888 4.61538 3.13888H15.3846C16.5529 3.13888 17.5 4.04559 17.5 5.16408V15.4742C17.5 16.5926 16.5529 17.4993 15.3846 17.4993H4.61538C3.44709 17.4993 2.5 16.5926 2.5 15.4742V5.16408Z"
      fill={color ?? "#191A20"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.92308 1.66602C7.2417 1.66602 7.5 1.9133 7.5 2.21834V5.16408C7.5 5.46912 7.2417 5.7164 6.92308 5.7164C6.60445 5.7164 6.34615 5.46912 6.34615 5.16408V2.21834C6.34615 1.9133 6.60445 1.66602 6.92308 1.66602ZM13.0769 1.66602C13.3955 1.66602 13.6538 1.9133 13.6538 2.21834V5.16408C13.6538 5.46912 13.3955 5.7164 13.0769 5.7164C12.7583 5.7164 12.5 5.46912 12.5 5.16408V2.21834C12.5 1.9133 12.7583 1.66602 13.0769 1.66602ZM2.5 8.10981C2.5 7.80477 2.7583 7.55749 3.07692 7.55749H16.9231C17.2417 7.55749 17.5 7.80477 17.5 8.10981C17.5 8.41485 17.2417 8.66214 16.9231 8.66214H3.07692C2.7583 8.66214 2.5 8.41485 2.5 8.10981Z"
      fill={color ?? "#191A20"}
    />
  </svg>
);
export default CalendarIcon;
