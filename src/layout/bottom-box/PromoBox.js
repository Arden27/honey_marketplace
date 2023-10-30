import Btn from "@/components/btn/Btn";

export default function PromoBox() {
  return (
    <section className=".min-h-[30rem] grid items-center justify-items-center overflow-hidden rounded-[2rem] bg-warning p-sm [&>*]:text-center ">
      <h2 className="p-sm text-3xl font-bold leading-none">
        Załóż konto
        <br />
        <span className="whitespace-nowrap">i zyskaj</span>
        <br />
        {/* MACIEK, trzeba zmienić czcionkę: */}
        <span className="text-[5rem] font-bold">5%</span>
        <br />
        rabatu
      </h2>

      <Btn
        className="border-transparent bg-bg self-end"
        href="/sklep"
        type="lg"
        hoverColor="bg"
      >
        Przejdź do sklepu
      </Btn>
    </section>
  );
}
