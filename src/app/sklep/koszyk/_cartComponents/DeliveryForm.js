import Box from "@/app/_layout/Box";
import Button from "@/components/Button";
import EditIcon from "public/icons/edit.svg";
import FormFieldset from "@/components/forms/FormFieldset";
import InputLabel from "@/components/forms/InputLabel";

import { useState } from "react";
import Checkbox from "@/components/Checkbox";

export default function DeliveryForm({
  isEditing,
  formData,
  setFormData,
  setIsEditing,
  handleInputChange,
}) {
  const [useBillingAddress, setUseBillingAddress] = useState(false);

  const handleUseBillingAddressChange = () => {
    setUseBillingAddress((prev) => !prev);
    if (!useBillingAddress) {
      setFormData((prev) => ({
        ...prev,
        shippingDelivery: {
          ...prev.shippingDelivery,
          sendAddressFirstname: prev.personalBillingData.mainAdressFirstname,
          sendAddressLastname: prev.personalBillingData.mainAdressLastname,
          sendAddressStreet: prev.personalBillingData.mainAdressStreet,
          sendAddressZipcode: prev.personalBillingData.mainAdressZipcode,
          sendAddressCity: prev.personalBillingData.mainAdressCity,
        },
      }));
    }
  };

  return (
    <Box className="relative" format="sm">
      <Button
        className="!absolute right-0 m-2xs hover:text-bg3"
        format="icon"
        onClick={() =>
          setIsEditing((prev) => ({
            ...prev,
            shippingDelivery: !prev.shippingDelivery,
          }))
        }
      >
        <EditIcon />
      </Button>

      {isEditing.shippingDelivery ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <FormFieldset legend="Adres dostawy">
            {/* ARTEM - kliknięcie w Checkbox powinno rozwijać listę */}
            <Checkbox
              type="checkbox"
              id="send-send-address-firstname"
              checked={useBillingAddress}
              onChange={handleUseBillingAddressChange}
              // Implement logic if needed for copying address from personalBillingData
            >
              Taki sam jak mój adres rozliczeniowy
            </Checkbox>
            <div className="flex gap-3xs md:flex-col lg:flex-row">
              <InputLabel
                type="text"
                id="send-address-firstname"
                label="Imię"
                value={
                  useBillingAddress
                    ? formData.personalBillingData.mainAdressFirstname
                    : formData.shippingDelivery.sendAddressFirstname
                }
                onChange={(e) =>
                  handleInputChange(
                    "shippingDelivery",
                    "sendAddressFirstname",
                    e.target.value,
                  )
                }
                disabled={useBillingAddress}
              />
              <InputLabel
                type="text"
                id="send-address-lastname"
                label="Nazwisko"
                value={
                  useBillingAddress
                    ? formData.personalBillingData.mainAdressLastname
                    : formData.shippingDelivery.sendAddressLastname
                }
                onChange={(e) =>
                  handleInputChange(
                    "shippingDelivery",
                    "sendAddressLastname",
                    e.target.value,
                  )
                }
                disabled={useBillingAddress}
              />
            </div>
            <InputLabel
              type="text"
              id="send-address-street"
              label="Ulica i nr domu"
              value={
                useBillingAddress
                  ? formData.personalBillingData.mainAdressStreet
                  : formData.shippingDelivery.sendAddressStreet
              }
              onChange={(e) =>
                handleInputChange(
                  "shippingDelivery",
                  "sendAddressStreet",
                  e.target.value,
                )
              }
              disabled={useBillingAddress}
            />
            <div className="flex gap-3xs md:flex-col lg:flex-row">
              <InputLabel
                type="text"
                id="send-address-zipcode"
                label="Kod pocztowy"
                value={
                  useBillingAddress
                    ? formData.personalBillingData.mainAdressZipcode
                    : formData.shippingDelivery.sendAddressZipcode
                }
                onChange={(e) =>
                  handleInputChange(
                    "shippingDelivery",
                    "sendAddressZipcode",
                    e.target.value,
                  )
                }
                disabled={useBillingAddress}
              />
              <InputLabel
                type="text"
                id="send-address-city"
                label="Miasto"
                value={
                  useBillingAddress
                    ? formData.personalBillingData.mainAdressCity
                    : formData.shippingDelivery.sendAddressCity
                }
                onChange={(e) =>
                  handleInputChange(
                    "shippingDelivery",
                    "sendAddressCity",
                    e.target.value,
                  )
                }
                disabled={useBillingAddress}
              />
            </div>
            ARTEM - Tutaj jeszcze numer telefonu. Czemu ten form wygląda inaczej
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
            <Button
              className="hover:text-bg3"
              format="sm"
              onClick={() =>
                setIsEditing((prev) => ({
                  ...prev,
                  shippingDelivery: false,
                }))
              }
            >
              Zapisz
            </Button>
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
    </Box>
  );
}
