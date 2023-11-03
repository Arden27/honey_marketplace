import Box from "@/components/Box";
import Btn from "@/components/btns/Btn";

export default function RegisterBox() {
  return (
    <Box type="sm">
      <h2>Zarejestruj się</h2>
      <Btn className="self-end hover:text-bg3" href="" type="lg">
        Kontynuuj
      </Btn>
    </Box>
  );
}
