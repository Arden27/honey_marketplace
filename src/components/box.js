export default function Box({ size, children }) {
  return (
    <>
      {size == "lg" ? (
        <section className="grid h-full w-full gap-sm overflow-hidden rounded-[2rem] bg-bg2 p-sm">
          {children}
        </section>
      ) : (
        <section className="grid h-full w-full gap-sm overflow-hidden rounded-[2rem] bg-bg3 p-sm">
          {children}
        </section>
      )}
    </>
  );
}
