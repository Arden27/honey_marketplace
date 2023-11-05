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

      <span className="flex text-xs items-center mt-sm">
        <span className="text-lg text-warning mt-[8px]">*</span> &nbsp;-
        Pola wymagane
      </span>
    </div>
  );
}
