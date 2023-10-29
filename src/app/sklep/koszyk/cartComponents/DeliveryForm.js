import EditIcon from "public/icons/edit.svg";
import FormFieldset from "@/components/forms/form-fieldset";
import InputLabel from "@/components/forms/input-label";

export default function DeliveryForm({
  isEditing,
  formData,
  setIsEditing,
  handleInputChange,
}) {
  return (
    <section className="box-sm relative grid gap-md">
      <button
        className="absolute right-0 m-sm"
        onClick={() =>
          setIsEditing((prev) => ({
            ...prev,
            shippingDelivery: !prev.shippingDelivery,
          }))
        }
      >
        <EditIcon />
      </button>

      {isEditing.shippingDelivery ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <FormFieldset legend="Adres dostawy">
            <InputLabel
              type="checkbox"
              id="send-send-address-firstname"
              label="Taki sam jak mój adres rozliczeniowy"
              // Implement logic if needed for copying address from personalBillingData
            />
            <div className="flex gap-3xs">
              <InputLabel
                type="text"
                id="send-address-firstname"
                label="Imię"
                value={formData.shippingDelivery.sendAddressFirstname}
                onChange={(e) =>
                  handleInputChange(
                    "shippingDelivery",
                    "sendAddressFirstname",
                    e.target.value,
                  )
                }
              />
              <InputLabel
                type="text"
                id="send-address-lastname"
                label="Nazwisko"
                value={formData.shippingDelivery.sendAddressLastname}
                onChange={(e) =>
                  handleInputChange(
                    "shippingDelivery",
                    "sendAddressLastname",
                    e.target.value,
                  )
                }
              />
            </div>
            <InputLabel
              type="text"
              id="send-address-street"
              label="Ulica i nr domu"
              value={formData.shippingDelivery.sendAddressStreet}
              onChange={(e) =>
                handleInputChange(
                  "shippingDelivery",
                  "sendAddressStreet",
                  e.target.value,
                )
              }
            />
            <div className="flex gap-3xs">
              <InputLabel
                type="text"
                id="send-address-zipcode"
                label="Kod pocztowy"
                value={formData.shippingDelivery.sendAddressZipcode}
                onChange={(e) =>
                  handleInputChange(
                    "shippingDelivery",
                    "sendAddressZipcode",
                    e.target.value,
                  )
                }
              />
              <InputLabel
                type="text"
                id="send-address-city"
                label="Miasto"
                value={formData.shippingDelivery.sendAddressCity}
                onChange={(e) =>
                  handleInputChange(
                    "shippingDelivery",
                    "sendAddressCity",
                    e.target.value,
                  )
                }
              />
            </div>
          </FormFieldset>

          <FormFieldset legend="Sposób dostawy">
            <InputLabel
              type="radio"
              name="deliveryMethodChoice" // Add a 'name' prop for radio buttons
              id="delivery-method-inpost-courier"
              label="Kurier InPost"
              value="Kurier InPost"
              checked={
                formData.shippingDelivery.deliveryMethodChoice ===
                "Kurier InPost"
              }
              onChange={(e) =>
                handleInputChange(
                  "shippingDelivery",
                  "deliveryMethodChoice",
                  e.target.value,
                )
              }
            />
            <InputLabel
              type="radio"
              name="deliveryMethodChoice"
              id="delivery-method-inpost-lockers"
              label="Paczkomaty InPost"
              value="Paczkomaty InPost"
              checked={
                formData.shippingDelivery.deliveryMethodChoice ===
                "Paczkomaty InPost"
              }
              onChange={(e) =>
                handleInputChange(
                  "shippingDelivery",
                  "deliveryMethodChoice",
                  e.target.value,
                )
              }
            />
          </FormFieldset>

          <div className="flex justify-center">
            <button
              className="btn-sm border-text"
              onClick={() =>
                setIsEditing((prev) => ({
                  ...prev,
                  shippingDelivery: false,
                }))
              }
            >
              Zapisz
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h2>Adres dostawy:</h2>
          <ul>
            <li>Imię: {formData.shippingDelivery.sendAddressFirstname}</li>
            <li>Nazwisko: {formData.shippingDelivery.sendAddressLastname}</li>
            <li>Ulica: {formData.shippingDelivery.sendAddressStreet}</li>
            <li>Kod: {formData.shippingDelivery.sendAddressZipcode}</li>
            <li>Miasto: {formData.shippingDelivery.sendAddressCity}</li>
          </ul>
          <h2>Sposób dostawy:</h2>
          <p>{formData.shippingDelivery.deliveryMethodChoice}</p>
        </div>
      )}
    </section>
  );
}
