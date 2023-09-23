import React from "react";

interface IIcon {
  width?: number;
  height?: number;
  color?: string;
}

const FilterIcon = ({ width, height, color, ...props }: IIcon) => (
  <svg {...props} width={width ?? 20} height={height ?? 20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.18619 4.40875C4.96354 6.675 8.24549 10.875 8.24549 10.875V16.125C8.24549 16.6062 8.64144 17 9.12537 17H10.8851C11.3691 17 11.765 16.6062 11.765 16.125V10.875C11.765 10.875 15.0382 6.675 16.8155 4.40875C16.9164 4.27958 16.9787 4.12484 16.9954 3.96216C17.0122 3.79947 16.9826 3.63539 16.9102 3.48857C16.8378 3.34176 16.7253 3.21813 16.5857 3.13175C16.4461 3.04538 16.2849 2.99973 16.1204 3H3.88129C3.15099 3 2.73745 3.83125 3.18619 4.40875Z"
      fill={color ?? "#191A20"}
    />
  </svg>
);

export default FilterIcon;
