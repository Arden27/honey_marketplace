import Box from "@/components/Box";
import Btn from "@/components/btn/Btn";

export default function NoRegisterBox() {
  return (
    <Box type="sm">
      <h2>Zamówienie bez rejestracji</h2>

      <Btn className="self-end" href="" type="lg" hoverColor="bg3">
        Kontynuuj
      </Btn>
    </Box>
  );
}
