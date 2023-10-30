
import Box from "@/components/Box";
import EditIcon from "public/icons/edit.svg";
import FormFieldset from "@/components/forms/FormFieldset";
import InputLabel from "@/components/forms/input-label";

export default function PaymentForm({
  isEditing,
  formData,
  setIsEditing,
  handleInputChange,
}) {
  return (
    <Box className="relative" type="sm">
      <button
        className="absolute right-0 m-sm"
        onClick={() =>
          setIsEditing((prev) => ({
            ...prev,
            paymentMethod: !prev.paymentMethod,
          }))
        }
      >
        <EditIcon />
      </button>

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
            <button
              type="button"
              className="btn-sm border-text"
              onClick={() =>
                setIsEditing((prev) => ({
                  ...prev,
                  paymentMethod: false,
                }))
              }
            >
              Zapisz
            </button>
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
