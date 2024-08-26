import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    blue_gray_50: "bg-blue_gray-50 text-blue_gray-200",
    cyan_50: "bg-cyan-50 text-black-900",
    gray_50_03: "bg-gray-50_03 text-black-900",
    teal_300: "bg-teal-300",
    white_A700: "bg-white-A700 text-gray-700_02",
    indigo_A200: "bg-indigo-A200 text-white-A700",
    gray_50_05: "bg-gray-50_05 text-blue_gray-400_01",
    gray_100_05: "bg-gray-100_05 text-blue_gray-400",
    gray_50: "bg-gray-50 shadow-bs text-blue_gray-200",
  },
  outline: { indigo_A200: "border border-indigo-A200 border-solid" },
};
const shapes = { round: "rounded-[12px]" };
const sizes = {
  xs: "p-[7px]",
  sm: "pb-1.5 pt-2.5 px-1.5",
  md: "pb-3 pl-[11px] pr-3 pt-[15px]",
  lg: "pb-3.5 pt-[17px] px-3.5",
  xl: "pb-2.5 pt-[18px] px-2.5",
  "2xl": "pb-5 pl-[18px] pr-5 pt-[21px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_gray_50",
    "cyan_50",
    "gray_50_03",
    "teal_300",
    "white_A700",
    "indigo_A200",
    "gray_50_05",
    "gray_100_05",
    "gray_50",
    "indigo_A200",
  ]),
};

export { Input };
