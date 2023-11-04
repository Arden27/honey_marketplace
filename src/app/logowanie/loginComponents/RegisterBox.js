import Box from "@/app/_layout/Box";
import Button from "@/components/Button";

export default function RegisterBox() {
  return (
    <Box type="sm">
      <h2>Zarejestruj się</h2>
      <Button className="self-end hover:text-bg3" href="" type="lg">
        Kontynuuj
      </Button>
    </Box>
  );
}
