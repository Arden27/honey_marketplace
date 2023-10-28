export default function PageWrapper({ children }) {
  return (
    <div className="mx-auto mb-sm w-[calc(100%-2*theme(spacing.sm))] max-w-screen-xl">
      {children}
    </div>
  );
}
