import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const SettingIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.03029 2.82255C9.10607 2.48805 9.4091 2.25 9.75912 2.25H13.7407C14.0906 2.25 14.3935 2.4879 14.4694 2.82227L14.9344 4.87071C15.3942 5.07461 15.8325 5.32225 16.2428 5.61005L18.2884 4.97977C18.6222 4.87693 18.9841 5.01481 19.1591 5.31143L21.1498 8.68661C21.3248 8.98317 21.2658 9.35886 21.0081 9.5904L19.428 11.0099C19.477 11.5015 19.477 11.9966 19.428 12.4881L21.0081 13.9076C21.2658 14.1392 21.3248 14.5149 21.1498 14.8114L19.1591 18.1866C18.9841 18.4832 18.6222 18.6211 18.2884 18.5183L16.2432 17.8881C15.8328 18.1765 15.3945 18.4246 14.9344 18.629L14.4694 20.6777C14.3935 21.0121 14.0906 21.25 13.7407 21.25H9.75912C9.4092 21.25 9.10624 21.0121 9.03035 20.6777L8.56541 18.6293C8.10557 18.4254 7.66731 18.1778 7.25695 17.89L5.21138 18.5202C4.87762 18.6231 4.51567 18.4852 4.34072 18.1886L2.34994 14.8134C2.17502 14.5168 2.23394 14.1411 2.49168 13.9096L4.07185 12.4901C4.02281 11.9985 4.02281 11.5034 4.07186 11.0118L2.49153 9.59123C2.23391 9.35967 2.17506 8.98408 2.34994 8.68758L4.34072 5.3124C4.51567 5.01578 4.87762 4.8779 5.21138 4.98074L7.25684 5.61099C7.66746 5.32285 8.10604 5.07493 8.56623 4.87082L9.03029 2.82255ZM10.3582 3.71154L9.94049 5.5554C9.88662 5.79317 9.71529 5.98904 9.48358 6.07775C8.90051 6.30098 8.35526 6.60919 7.8663 6.99195C7.67204 7.14402 7.41317 7.19139 7.17591 7.11828L5.33432 6.55085L3.94225 8.91098L5.36476 10.1896C5.54755 10.3539 5.63499 10.5964 5.59805 10.8367C5.50485 11.4428 5.50485 12.0592 5.59805 12.6653C5.635 12.9056 5.5475 13.1481 5.3646 13.3125L3.94234 14.5901L5.33432 16.9501L7.1759 16.3827C7.4131 16.3096 7.67191 16.3569 7.86615 16.5089C8.35488 16.8913 8.89982 17.1992 9.48252 17.4222C9.71416 17.5109 9.88548 17.7067 9.93943 17.9443L10.358 19.7885H13.1418L13.5604 17.9443C13.6143 17.7068 13.7854 17.5112 14.0168 17.4224C14.5996 17.1989 15.1445 16.8904 15.6331 16.5074C15.8274 16.3551 16.0864 16.3076 16.3239 16.3807L18.1655 16.9482L19.5574 14.5882L18.1352 13.3105C17.9523 13.1462 17.8648 12.9036 17.9017 12.6633C17.995 12.0572 17.995 11.4409 17.9017 10.8348C17.8648 10.5945 17.9523 10.3519 18.1352 10.1875L19.5574 8.90986L18.1655 6.54988L16.3239 7.11731C16.0867 7.19039 15.8279 7.14307 15.6336 6.9911C15.1449 6.60873 14.6 6.30081 14.0172 6.07777C13.7856 5.9891 13.6143 5.79334 13.5604 5.55568L13.1418 3.71154H10.3582Z"
      fill={color ?? "#191A20"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.709 9.55769C10.4721 9.55769 9.46935 10.5392 9.46935 11.75C9.46935 12.9608 10.4721 13.9423 11.709 13.9423C12.9459 13.9423 13.9486 12.9608 13.9486 11.75C13.9486 10.5392 12.9459 9.55769 11.709 9.55769ZM7.97627 11.75C7.97627 9.73204 9.64746 8.09615 11.709 8.09615C13.7705 8.09615 15.4417 9.73204 15.4417 11.75C15.4417 13.768 13.7705 15.4038 11.709 15.4038C9.64746 15.4038 7.97627 13.768 7.97627 11.75Z"
      fill={color ?? "#191A20"}
    />
  </svg>
);
export default SettingIcon;
