import Box from "@/app/_layout/Box";
import Button from "@/components/Button";
import EditIcon from "public/icons/edit.svg";
import FormFieldset from "@/components/forms/FormFieldset";
import InputLabel from "@/components/forms/InputLabel";

export default function PaymentForm({
  isEditing,
  formData,
  setIsEditing,
  handleInputChange,
}) {
  return (
    <Box className="relative" format="sm">
      <Button
        className="!absolute right-0 m-2xs hover:text-bg3"
        format="icon"
        onClick={() =>
          setIsEditing((prev) => ({
            ...prev,
            paymentMethod: !prev.paymentMethod,
          }))
        }
      >
        <EditIcon />
      </Button>

      {isEditing.paymentMethod ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <FormFieldset legend="Płatności">
            {[
              ["payment-transfer", "Przelew online"],
              ["payment-blik", "BLIK"],
              ["payment-card", "Karta płatnicza"],
              ["payment-apple", "Apple Pay"],
              ["payment-google", "Google Pay"],
              ["payment-paypal", "Paypal"],
              ["payment-cash", "Za pobraniem"],
            ].map(([id, label]) => (
              <InputLabel
                key={id}
                type="radio"
                id={id}
                label={label}
                value={id}
                checked={formData.paymentMethod.paymentChoice === id}
                onChange={(e) =>
                  handleInputChange(
                    "paymentMethod",
                    "paymentChoice",
                    e.target.value,
                  )
                }
              />
            ))}
          </FormFieldset>

          <div className="flex justify-center">
            <Button
              format="sm"
              className="hover:text-bg3"
              onClick={() =>
                setIsEditing((prev) => ({
                  ...prev,
                  paymentMethod: false,
                }))
              }
            >
              Zapisz
            </Button>
          </div>
        </form>
      ) : (
        <div>
          <h2>Wybrana metoda płatności:</h2>
          <p>{formData.paymentMethod.paymentChoice}</p>
        </div>
      )}
    </Box>
  );
}
