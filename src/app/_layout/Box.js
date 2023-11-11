export default function Box({ format, className, children }) {
  return (
    <section
      className={`grid gap-sm rounded-[2rem] p-sm 
        ${format === "sm" ? "bg-bg3" : ""}    
        ${format === "lg" ? "bg-bg2" : ""}
        ${className}
        `}
    >
      {children}
    </section>
  );
}
