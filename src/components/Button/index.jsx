import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-md" };
const variants = {
  fill: {
    blue_50: "bg-blue-50 text-black-900",
    deep_purple_A400: "bg-deep_purple-A400 text-white-A700",
    red_700_4c: "bg-red-700_4c text-red-700",
    indigo_A200_a3: "bg-indigo-A200_a3 text-white-A700",
    black_900: "bg-black-900 text-white-A700",
    gray_100_07: "bg-gray-100_07",
    cyan_50: "bg-cyan-50 text-black-900",
    light_blue_A700: "bg-light_blue-A700 text-white-A700",
    gray_900: "bg-gray-900 text-white-A700",
    orange_50: "bg-orange-50 text-orange-600",
    indigo_50_01: "bg-indigo-50_01 text-black-900",
    deep_orange_300: "bg-deep_orange-300",
    green_A700: "bg-green-A700",
    blue_50_04: "bg-blue-50_04 text-black-900",
    white_A700: "bg-white-A700 text-black-900",
    red_700_33: "bg-red-700_33 text-red-700",
    green_500_33_01: "bg-green-500_33_01 text-green-500_01",
    green_300: "bg-green-300",
    yellow_600: "bg-yellow-600 text-black-900",
    blue_100: "bg-blue-100 text-black-900",
    gray_50_08: "bg-gray-50_08 text-black-900",
    blue_gray_100_19: "bg-blue_gray-100_19 text-black-900",
    gray_50_02: "bg-gray-50_02",
    deep_purple_50: "bg-deep_purple-50 text-indigo-A200",
    pink_300: "bg-pink-300 text-white-A700",
    orange_600: "bg-orange-600 text-white-A700",
    deep_orange_A100: "bg-deep_orange-A100 text-white-A700",
    green_500_01: "bg-green-500_01 text-white-A700",
    indigo_A200: "bg-indigo-A200 text-white-A700",
  },
  outline: {
    gray_200_08: "border border-gray-200_08 border-solid text-gray-700_04",
    gray_200_02: "border border-gray-200_02 border-solid",
    gray_200_09: "border border-gray-200_09 border-solid text-gray-700_04",
    black_900: "border border-black-900 border-solid text-black-900",
  },
};
const sizes = {
  xs: "p-px",
  sm: "p-1.5",
  md: "p-[9px]",
  lg: "p-3",
  xl: "p-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_50",
    "deep_purple_A400",
    "red_700_4c",
    "indigo_A200_a3",
    "black_900",
    "gray_100_07",
    "cyan_50",
    "light_blue_A700",
    "gray_900",
    "orange_50",
    "indigo_50_01",
    "deep_orange_300",
    "green_A700",
    "blue_50_04",
    "white_A700",
    "red_700_33",
    "green_500_33_01",
    "green_300",
    "yellow_600",
    "blue_100",
    "gray_50_08",
    "blue_gray_100_19",
    "gray_50_02",
    "deep_purple_50",
    "pink_300",
    "orange_600",
    "deep_orange_A100",
    "green_500_01",
    "indigo_A200",
    "gray_200_08",
    "gray_200_02",
    "gray_200_09",
  ]),
};

export { Button };
