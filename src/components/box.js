export default function Box({ type, className, children }) {
  return (
    <section
      className={`grid gap-sm overflow-hidden rounded-[2rem] p-sm
        ${type === "sm" ? "bg-bg3" : ""}    
        ${type === "lg" ? "bg-bg2" : ""}
        ${className}
        `}
    >
      {children}
    </section>
  );
}
