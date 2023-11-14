import Box from "@/app/_layout/Box";
import BottomBox from "@/app/_layout/bottomBox/BottomBox";

export const metadata = {
  title: "O nas - Dobry Bartnik",
  description: "OPIS",
  keywords: "TAGI",
};

export default function AboutUs() {
  return (
    <main className="">
      <Box format="lg">O NAS</Box>

      <BottomBox />
    </main>
  );
}
