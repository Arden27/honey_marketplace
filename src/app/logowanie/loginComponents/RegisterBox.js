import Box from "@/app/_layout/Box";
import Button from "@/components/Button";

export default function RegisterBox() {
  return (
    <Box format="sm">
      <h2>Zarejestruj się</h2>
      <Button className="self-end hover:text-bg3" href="" format="lg">
        Kontynuuj
      </Button>
    </Box>
  );
}
