import Image from "next/image";
import Link from "next/link";
import Btn from "@/components/btns/Btn";

export default function HowToBox() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden rounded-[2rem] ">
      <Image
        className="top-0 h-full w-full object-cover object-left-bottom"
        src="/img/logo.png"
        width={500}
        height={500}
        alt="Prawdziwy miód"
      />

      <h2 className="absolute p-sm text-center">
        Jak poznać <strong>prawdziwy</strong> miód?
      </h2>

      <Link
        className="absolute bottom-sm"
        href="/artykuly/jak-rozpoznac-prawdziwy-miod"
      >
        <Btn className="border-transparent bg-bg hover:text-bg" type="lg">
          Sprawdź już dziś!
        </Btn>
      </Link>
    </section>
  );
}
