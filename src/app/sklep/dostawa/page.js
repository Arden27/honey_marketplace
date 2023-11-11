import Box from "@/app/_layout/Box";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

export const metadata = {
  title: "Dostawa - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Delivery() {
  return (
    <main className="">
      <Box format="lg">Dostawa</Box>

      <BottomBox />
    </main>
  );
}
