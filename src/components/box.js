export default function Box({ type, children }) {
  return (
    <>
      {type == "lg" ? (
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
