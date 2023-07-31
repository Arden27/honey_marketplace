
import BottomBox from "@/components/bottom-box";

export const metadata = {
  title: "Moje zamówienia - Kurpiowski Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Articles() {
  return (
    <main>
      <section className="mx-auto w-[calc(100%-2*theme(spacing.md))]">
        Moje zamówienia
      </section>

      <BottomBox />
    </main>
  );
}
