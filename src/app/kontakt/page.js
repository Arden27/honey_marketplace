import Box from "@/app/_layout/Box";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

export const metadata = {
  title: "Kontakt - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function Contact() {
  return (
    <main className="">
      <Box format="lg">KONTAKT</Box>

      <BottomBox />
    </main>
  );
}
