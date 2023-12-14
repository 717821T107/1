import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[3px]" };
const variants = {
  fill: {
    green_900_01: "bg-green-900_01 shadow-bs2 text-white-A700",
    green_900: "bg-green-900 shadow-bs1 text-white-A700",
    gray_700: "bg-gray-700 text-white-A700",
    red_50: "bg-red-50 text-red-300",
    red_500: "bg-red-500 text-white-A700",
    blue_gray_50: "bg-blue_gray-50",
  },
  outline: {
    indigo_800: "border border-indigo-800 border-solid text-indigo-800",
    green_900: "border-2 border-green-900 border-solid text-green-900",
  },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-[11px]",
  md: "p-4",
  lg: "p-[22px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "outline",
  color = "green_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "green_900_01",
    "green_900",
    "gray_700",
    "red_50",
    "red_500",
    "blue_gray_50",
    "indigo_800",
  ]),
};

export { Button };
