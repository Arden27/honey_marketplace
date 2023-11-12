import Box from "@/app/_layout/Box";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

export const metadata = {
  title: "Polityka prywatności - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Privacy() {
  return (
    <main className="">
      <Box format="lg">POLITYKA PRYWATNOŚCI</Box>

      <BottomBox />
    </main>
  );
}
