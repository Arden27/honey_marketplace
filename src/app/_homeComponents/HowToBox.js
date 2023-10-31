import Image from "next/image";
import Btn from "@/components/btns/Btn";

export default function HowToBox() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden rounded-[2rem] [&>*]:text-center">
      <Image
        className="top-0 h-full w-full object-cover object-left-bottom"
        src="/img/logo.png"
        width={500}
        height={500}
        alt="Prawdziwy miód"
      />

      <h2 className="absolute p-sm">
        Jak poznać <strong>prawdziwy</strong> miód?
      </h2>


      <Btn
        className="absolute bottom-sm bg-bg border-transparent"
        href="/artykuly/jak-rozpoznac-prawdziwy-miod"
        type="lg"
        hoverColor="bg"
      >
        Sprawdź już dziś!
      </Btn>
    </section>
  );
}
