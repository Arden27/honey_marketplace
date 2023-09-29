import Link from "next/link";

import BottomBox from "@/components/box/bottom-box";

export const metadata = {
  title: "O nas - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function AboutUs() {
  return (
    <main>
      <section className="page-wrapper">O NAS</section>

      <BottomBox />
    </main>
  );
}
