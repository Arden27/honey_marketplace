import Link from "next/link";

export default function Btn({ href, type, hoverColor, className, children }) {
  return (
    // ARTEM - tutaj zawiera a nie czy jest:

    <Link href={href ? href : ""}>
      <button
        className={`flex w-fit items-center justify-center rounded-[2rem] border-2 border-solid border-text font-btn text-sm uppercase text-text transition-colors duration-300 ease-in-out 
        hover:bg-text hover:ring-0 hover:text-${hoverColor}
        focus:bg-text focus:ring-0 
        [&>*]:duration-300 [&>*]:ease-in-out
        ${
          type === "sm"
            ? "h-[calc(theme(spacing.lg)+theme(spacing.3xs))] p-xs "
            : ""
        }    
        ${
          type === "lg"
            ? "h-[calc(theme(spacing.lg)+theme(spacing.xs))] min-w-[calc(theme(spacing.3xl)+theme(spacing.2xl))] p-sm px-md "
            : ""
        }
        ${
          type === "icon"
            ? "h-[calc(theme(spacing.lg)+theme(spacing.3xs))] w-[calc(theme(spacing.lg)+theme(spacing.xs))] stroke-2"
            : ""
        }
        ${type === "border" ? "border-text" : ""}
        ${
          type === "icon"
            ? "h-[calc(theme(spacing.lg)+theme(spacing.3xs))] w-[calc(theme(spacing.lg)+theme(spacing.xs))] bg-red-100 stroke-2"
            : ""
        }

        ${className}
        `}
      >
        {children}
      </button>
    </Link>
  );
}
