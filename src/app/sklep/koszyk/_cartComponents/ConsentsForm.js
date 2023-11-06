import Checkbox from "@/components/Checkbox";
import Link from "next/link";

export default function ConsentsForm() {
  return (
    <div>
      <Checkbox>
        Potwierdzam, że zapoznałem się i akceptuję{" "}
        <Link className="whitespace-nowrap underline" href="/">
          Regulamin sklepu
        </Link>{" "}
        oraz{" "}
        <Link className="whitespace-nowrap underline" href="/">
          Politykę prywatności
        </Link>
        .
      </Checkbox>
      <Checkbox>Chcę się zapisać do newslettera.</Checkbox>

      {/* Artem - Jeżeli is Required to dodawać * - Pola wymagane */}

      <span className="flex mt-2xs items-center text-xs h-sm">
        <span className="mt-[8px] text-lg text-warning">*</span> &nbsp;- Pola
        wymagane
      </span>
    </div>
  );
}
