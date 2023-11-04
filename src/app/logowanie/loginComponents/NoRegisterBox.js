import Box from "@/app/_layout/Box";
import Button from "@/components/Button";

export default function NoRegisterBox() {
  return (
    <Box type="sm">
      <h2>Zamówienie bez rejestracji</h2>

      <Button
        className="self-end hover:text-bg3"
        href=""
        type="lg"

      >
        Kontynuuj
      </Button>
    </Box>
  );
}
