import Box from "@/app/_layout/Box";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

export const metadata = {
  title: "Ustawienia konta - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Settings() {
  return (
    <main className="">
      <Box format="lg">Ustawienia konta</Box>

      <BottomBox />
    </main>
  );
}
