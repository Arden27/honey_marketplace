import Link from "next/link";

function getButtonStyles(type) {
  const types = type ? type.split(' ') : [];

  let styles = '';

  if (types.includes("sm")) {
    styles += "h-[calc(theme(spacing.lg)+theme(spacing.3xs))] p-xs ";
  }
  if (types.includes("lg")) {
    styles += "h-[calc(theme(spacing.lg)+theme(spacing.xs))] min-w-[calc(theme(spacing.3xl)+theme(spacing.2xl))] p-sm px-md ";
  }
  if (types.includes("icon")) {
    styles += "h-[calc(theme(spacing.lg)+theme(spacing.3xs))] w-[calc(theme(spacing.lg)+theme(spacing.xs))] stroke-2 bg-red-100 ";
  }
  if (types.includes("border")) {
    styles += "border-text ";
  }

  return styles.trim();
}

export default function Button({ href, type, hoverColor = "white", className, children, ...props }) {
  const buttonStyles = getButtonStyles(type);

  const ButtonContent = (
    <button
      className={`flex w-fit items-center justify-center rounded-[2rem] border-2 border-solid border-text font-btn text-sm uppercase text-text transition-colors duration-300 ease-in-out 
      hover:bg-text hover:ring-0 hover:text-${hoverColor}
      focus:bg-text focus:ring-0 
      [&>*]:duration-300 [&>*]:ease-in-out
      ${buttonStyles}
      ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );

  return href ? <Link href={href}>{ButtonContent}</Link> : ButtonContent;
}