import React from "react";

const sizeClasses = {
  txtHeeboRegular17: "font-heebo font-normal",
  txtPoppinsMedium22Gray800: "font-medium font-poppins",
  txtRobotoSlabBold46: "font-bold font-robotoslab",
  txtPoppinsMedium20GreenA100: "font-medium font-poppins",
  txtInterMedium22: "font-inter font-medium",
  txtInterSemiBold24: "font-inter font-semibold",
  txtMontserratSemiBold36: "font-montserrat font-semibold",
  txtInterBold22: "font-bold font-inter",
  txtRobotoSlabMedium64: "font-medium font-robotoslab",
  txtPoppinsMedium22Bluegray900: "font-medium font-poppins",
  txtRobotoSlabMedium22: "font-medium font-robotoslab",
  txtTelexRegular36: "font-normal font-telex",
  txtGupterBold43: "font-bold font-gupter",
  txtManualeRomanBold40: "font-bold font-manuale",
  txtSenBold24: "font-bold font-sen",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsMedium22: "font-medium font-poppins",
  txtMontserratExtraBold24: "font-extrabold font-montserrat",
  txtSpectralBold24: "font-bold font-spectral",
  txtRobotoSerifSemiBold22: "font-robotoserif font-semibold",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtActorRegular60: "font-actor font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtPoppinsMedium16Gray600: "font-medium font-poppins",
  txtInterRegular18: "font-inter font-normal",
  txtRufinaBold86: "font-bold font-rufina",
  txtInterSemiBold18WhiteA700: "font-inter font-semibold",
  txtBesleyRomanRegular50: "font-besley font-normal",
  txtRobotoSlabMedium50: "font-medium font-robotoslab",
  txtHeadlandOneRegular15: "font-headlandone font-normal",
  txtInterBold46: "font-bold font-inter",
  txtMontserratRegular18: "font-montserrat font-normal",
  txtRobotoSlabMedium48: "font-medium font-robotoslab",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtInterExtraBold30: "font-extrabold font-inter",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtHeeboRegular25: "font-heebo font-normal",
  txtHeeboLight20: "font-heebo font-light",
  txtInterSemiBold18: "font-inter font-semibold",
  txtHeeboBold30: "font-bold font-heebo",
  txtInterSemiBold60: "font-inter font-semibold",
  txtMontserratSemiBold36Black900: "font-montserrat font-semibold",
  txtInterSemiBold22: "font-inter font-semibold",
  txtHarmattanRegular35: "font-harmattan font-normal",
  txtInterExtraBold30WhiteA700: "font-extrabold font-inter",
  txtHeeboBlack70: "font-black font-heebo",
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
