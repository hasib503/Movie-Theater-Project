import cn from "../../UtilKits";
import { cva } from "class-variance-authority";
import React from "react";
import { Link } from "react-router-dom";

const DEFAULT_BUTTON_STYLES = "bg-gradient-to-br from-[#4b004a] to-[#ff0026] ";

const PRIMARY_BUTTON_STYLES =
  " text-white hover:bg-gradient-to-br hover:from-[#ff0026] hover:to-[#4b004a]";
const SECONDARY_BUTTON_STYLES = "border-2 border-[#ff0026] bg-none";

// Button sizes:
const LARGE_BUTTON_STYLES = "text-lg font-semibold p-2 px-7 rounded-md";
const MEDIUM_BUTTON_STYLES = "px-5 py-2 rounded-md text-white";
const SMALL_BUTTON_STYLES = "px-2 py-1 text-sm";

const BUTTON_VARIANTS = cva(DEFAULT_BUTTON_STYLES, {
  variants: {
    variant: {
      primary: PRIMARY_BUTTON_STYLES,
      secondary: SECONDARY_BUTTON_STYLES,
    },
    size: {
      large: LARGE_BUTTON_STYLES,
      medium: MEDIUM_BUTTON_STYLES,
      small: SMALL_BUTTON_STYLES,
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

const Button = ({
  title,
  clickable = true,
  path = "#",
  variant,
  size,
  type,
  className,
  ...props
}) => {
  const BUTTON_STYLES = cn(BUTTON_VARIANTS({ variant, size }), className);
  return (
    <>
      {clickable ? (
        <button className={BUTTON_STYLES} type={type} {...props}>
          {title}
        </button>
      ) : (
        <Link className={BUTTON_STYLES} {...props} to={path}>
          {title}
        </Link>
      )}
    </>
  );
};

export default Button;
