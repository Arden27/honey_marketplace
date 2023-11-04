export default function Bar({ children }) {
  return (
    <section className="fixed top-[calc(theme(spacing.2xl)+theme(spacing.sm))] -z-20  max-h-[calc(100svh-theme(spacing.3xl)-theme(spacing.sm)-theme(spacing.lg))]  max-w-[calc(100%-theme(spacing.2xs))] bg-bar p-sm shadow">
      {children}
    </section>
  );
}
