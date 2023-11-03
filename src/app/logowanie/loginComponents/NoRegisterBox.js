import Box from "@/components/Box";
import Btn from "@/components/btns/Btn";

export default function NoRegisterBox() {
  return (
    <Box type="sm">
      <h2>Zamówienie bez rejestracji</h2>

      <Btn
        className="self-end hover:text-bg3"
        href=""
        type="lg"

      >
        Kontynuuj
      </Btn>
    </Box>
  );
}
