import React from "react";
import Link from "next/link";

function getButtonStyles(format) {
  const types = format ? format.split(" ") : [];

  let styles = "";

  if (types.includes("sm")) {
    styles += "h-[calc(theme(spacing.lg)+theme(spacing.3xs))] w-fit p-xs ";
  }
  if (types.includes("lg")) {
    styles +=
      "h-[calc(theme(spacing.lg)+theme(spacing.xs))] w-fit min-w-[calc(theme(spacing.3xl)+theme(spacing.2xl))] p-sm px-md ";
  }
  if (types.includes("icon")) {
    styles +=
      "h-[calc(theme(spacing.lg)+theme(spacing.3xs))] w-[calc(theme(spacing.lg)+theme(spacing.xs))] border-transparent stroke-2 [&>svg]:h-[25px] [&>svg]:w-[25px] [&>*]:stroke-2";
  }
  if (types.includes("border")) {
    styles += "border-text ";
  }

  return styles.trim();
}

function Button({ href, format, label, className, children, ...props }, ref) {
  const buttonStyles = getButtonStyles(format);

  const Tag = href || label ? 'div' : 'button';

  const commonProps = {
    ref: ref,
    className: `relative flex items-center justify-center rounded-[2rem] border-2 border-solid border-text font-btn text-sm uppercase text-text transition-colors duration-300 ease-in-out hover:bg-text
                active:top-[2px] active:opacity-90 
                ${buttonStyles}
                ${className}`,
    ...props,
  };

  const ButtonContent = (
    <Tag {...commonProps}>
      {children}
    </Tag>
  );

  // ARTEM - Trzeba jednak usunąć tę funkcję z linkiem i tak jej nie żywam i nie dzial gdy chcę dawać position:absolute - jeszcze do przemyślenia

  return href ? <Link href={href}>{ButtonContent}</Link> : ButtonContent;
}

export default React.forwardRef(Button);
