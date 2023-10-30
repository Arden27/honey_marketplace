export default function PageWrapper({ children }) {
  return (
    <div className="mx-auto w-[calc(100%-2*theme(spacing.2xs))] max-w-screen-xl 315px:w-[calc(100%-2*theme(spacing.sm))]">
      {children}
    </div>
  );
}
