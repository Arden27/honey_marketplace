
import BottomBox from "@/components/box/bottom-box";

export const metadata = {
  title: "Moje zamówienia - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Articles() {
  return (
    <main>
      <section className="page-wrapper">Moje zamówienia</section>

      <BottomBox />
    </main>
  );
}
