import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  outline: {
    deep_purple_300:
      "border border-deep_purple-300 border-solid text-deep_purple-300",
    blue_gray_100:
      "border border-blue_gray-100 border-solid text-blue_gray-100",
    green_900: "border-2 border-green-900 border-solid text-black-900",
  },
  fill: {
    red_400_19: "bg-red-400_19 text-red-600",
    indigo_400_16: "bg-indigo-400_16 text-blue-A400",
  },
};
const shapes = { round: "rounded-[5px]" };
const sizes = {
  xs: "pb-3.5 pt-[11px] px-[11px]",
  sm: "pb-[21px] pt-[15px] px-[15px]",
  md: "pl-[22px] pr-6 sm:px-5 py-6",
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
      size = "sm",
      variant = "outline",
      color = "green_900",
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
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "deep_purple_300",
    "blue_gray_100",
    "green_900",
    "red_400_19",
    "indigo_400_16",
  ]),
};

export { Input };
