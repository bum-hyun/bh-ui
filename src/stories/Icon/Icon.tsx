import React, { HTMLAttributes } from "react";
import * as Icons from "../assets/icon";

type IconType = keyof typeof Icons;
export const iconTypes: IconType[] = Object.keys(Icons) as any[];

interface IIcon extends HTMLAttributes<HTMLOrSVGElement> {
  icon: IconType;
  width?: number;
  height?: number;
  color?: string;
}

export const Icon = ({ icon, ...props }: IIcon) => {
  const SVGIcon = Icons[icon];
  return <SVGIcon {...props} />;
};

Icon.defaultProps = {};
