import React from "react";

const sizeClasses = {
  txtPoppinsMedium9: "font-medium font-[Poppins]",
  txtLatoBold16: "font-bold font-lato",
  txtPoppinsMedium20Black900: "font-medium font-[Poppins]",
  txtMontserratBold20RedA700: "font-bold font-montserrat",
  txtPoppinsRegular12Gray50003: "font-normal font-[Poppins]",
  txtOpenSansRegular8: "font-normal font-opensans",
  txtPoppinsMedium14: "font-medium font-[Poppins]",
  txtPoppinsSemiBold14: "font-[Poppins] font-semibold",
  txtPoppinsRegular12: "font-normal font-[Poppins]",
  txtMontserratRegular16: "font-montserrat font-normal",
  txtPoppinsMedium12: "font-medium font-[Poppins]",
  txtMontserratRegular14: "font-montserrat font-normal",
  txtPoppinsSemiBold32: "font-[Poppins] font-semibold",
  txtPoppinsMedium20Bluegray90002: "font-medium font-[Poppins]",
  txtPoppinsSemiBold12: "font-[Poppins] font-semibold",
  txtHindMedium14Bluegray90005: "font-hind font-medium",
  txtPoppinsMedium18: "font-medium font-[Poppins]",
  txtPoppinsMedium16: "font-medium font-[Poppins]",
  txtPoppinsMedium12Black900: "font-medium font-[Poppins]",
  txtMontserratMedium12: "font-medium font-montserrat",
  txtMontserratBold20: "font-bold font-montserrat",
  txtPoppinsMedium16WhiteA700: "font-medium font-[Poppins]",
  txtOpenSansLight10: "font-light font-opensans",
  txtPoppinsRegular14: "font-normal font-[Poppins]",
  txtMontserratBold28: "font-bold font-montserrat",
  txtPoppinsMedium24: "font-medium font-[Poppins]",
  txtHindRegular14: "font-hind font-normal",
  txtPoppinsSemiBold26: "font-[Poppins] font-semibold",
  txtPoppinsMedium20: "font-medium font-[Poppins]",
  txtPoppinsMedium16Bluegray90001: "font-medium font-[Poppins]",
  txtHindMedium14: "font-hind font-medium",
  txtHindRegular12: "font-hind font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
