import clsx from "clsx";
import React from "react";

const Button = (props) => {
  const {
    type = "button",
    children,
    isLoading = false,
    className = "",
    color,
    bgColor,
    textColor,
    outLineColor,
    size = "md",
    ...rest
  } = props;
  const sizeClasses = (size) => {
    switch (size) {
      case "sm":
        return `px-4 py-1 text-sm font font-Poppins_light`;
      case "md":
        return `px-6 py-2.5 text-md font-Poppins_semiBold`;
      case "lg":
        return `px-6 py-3 text-lg font-Poppins_medium`;
      default:
        return "";
    }
  };

  const outlineClasses = outLineColor ? `ring ${outLineColor}` : null;

  const backgroundClasses = outLineColor
    ? outlineClasses
    : bgColor
    ? `ring ${bgColor}`
    : "ring bg-white";

  const textColorClasses = textColor ? `${textColor}` : "tex-black";

  const mergedClasses = clsx(
    `uppercase ring-inset w-full rounded ${backgroundClasses} ${textColorClasses} ${sizeClasses(
      size
    )}`
  );

  return (
    <button
      className={mergedClasses}
      {...rest}
      disabled={isLoading}
    >
      {children}
    </button>
  );
};

export default Button;
