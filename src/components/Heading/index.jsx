import React from "react";

const sizes = {
  "2xl": "text-2xl font-semibold leading-[29px]",
  xl: "text-xl font-semibold",
  s: "text-xs font-semibold",
  md: "text-sm font-extrabold leading-[17px]",
  xs: "text-[11px] font-semibold leading-[14px]",
  lg: "text-base font-semibold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
