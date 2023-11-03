import Link from "next/link";

function getButtonStyles(type) {
  const types = type ? type.split(" ") : [];

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

export default function Btn({ href, type, className, children, ...props }) {
  const buttonStyles = getButtonStyles(type);

  const ButtonContent = (
    <button
      className={`relative flex items-center justify-center rounded-[2rem] border-2 border-solid border-text font-btn text-sm uppercase text-text transition-colors duration-300 ease-in-out hover:bg-text
      active:top-[1px] active:opacity-90
      ${buttonStyles}
      ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );

  // ARTEM - Trzeba jednak usunąć tę funkcję z linkiem i tak jej nie żywam i nie dzial gdy chcę dawać position:absolute

  return href ? <Link href={href}>{ButtonContent}</Link> : ButtonContent;
}
