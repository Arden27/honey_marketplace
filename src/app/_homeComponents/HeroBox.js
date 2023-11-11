import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function HeroBox() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden rounded-[2rem] ">
      <Image
        className="top-0 h-full w-full object-cover object-left-bottom "
        src="/img/logo.png"
        width={500}
        height={500}
        alt="Nasze nowości"
      />

      <h2 className="absolute p-sm">Zobacz nasze najnowsze zbiory!</h2>

      <Link className="absolute bottom-sm" href="/sklep">
        <Button className="border-transparent bg-bg hover:text-bg" format="lg">
          Przejdź do sklepu
        </Button>
      </Link>
    </section>
  );
}
