
import Box from "@/components/Box";
import Link from "next/link";
import Btn from "@/components/btns/Btn";

export default function RegisterBox() {
  return (
    <Box type="sm">
      <h2>Zarejestruj się</h2>
      <Btn className="self-end" href="" type="lg" hoverColor="bg3">
        Kontynuuj
      </Btn>
    </Box>
  );
}
