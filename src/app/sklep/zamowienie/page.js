import Box from "@/app/_layout/Box";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

export const metadata = {
  title: "Zamówienie nr 1 - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Order() {
  return (
    <main className="">
      <Box format="lg">STATUS ZAMÓWIENIA nr 1</Box>

      <BottomBox />
    </main>
  );
}
