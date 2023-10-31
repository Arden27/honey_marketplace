import Box from "@/components/Box";
import EditIcon from "public/icons/edit.svg";
import FormFieldset from "@/components/forms/FormFieldset";
import InputLabel from "@/components/forms/InputLabel";
import Btn from "@/components/btns/Btn";

export default function BillingForm({
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
            personalBillingData: !prev.personalBillingData,
          }))
        }
      >
        <EditIcon />
      </button>

      {isEditing.personalBillingData ? (
        // Input fields for editing mode
        <form onSubmit={(e) => e.preventDefault()}>
          <FormFieldset legend="Moje dane">
            <div className="flex gap-3xs">
              <InputLabel
                type="text"
                id="main-adress-firstname"
                label="Imię"
                value={formData.personalBillingData.mainAdressFirstname}
                onChange={(e) =>
                  handleInputChange(
                    "personalBillingData",
                    "mainAdressFirstname",
                    e.target.value,
                  )
                }
              />
              <InputLabel
                type="text"
                id="main-adress-lastname"
                label="Nazwisko"
                value={formData.personalBillingData.mainAdressLastname}
                onChange={(e) =>
                  handleInputChange(
                    "personalBillingData",
                    "mainAdressLastname",
                    e.target.value,
                  )
                }
              />
            </div>
            <InputLabel
              type="email"
              id="log-in-email"
              label="E-mail"
              value={formData.personalBillingData.logInEmail}
              onChange={(e) =>
                handleInputChange(
                  "personalBillingData",
                  "logInEmail",
                  e.target.value,
                )
              }
            />
            <InputLabel
              type="phone"
              id="main-adress-phone"
              label="Nr telefonu"
              value={formData.personalBillingData.mainAdressPhone}
              onChange={(e) =>
                handleInputChange(
                  "personalBillingData",
                  "mainAdressPhone",
                  e.target.value,
                )
              }
            />
          </FormFieldset>
          <FormFieldset legend="Adres rozliczeniowy">
            <InputLabel
              type="text"
              id="main-adress-street"
              label="Ulica i nr domu"
              value={formData.personalBillingData.mainAdressStreet}
              onChange={(e) =>
                handleInputChange(
                  "personalBillingData",
                  "mainAdressStreet",
                  e.target.value,
                )
              }
            />
            <div className="flex gap-3xs">
              <InputLabel
                type="text"
                id="main-adress-zipcode"
                label="Kod pocztowy"
                value={formData.personalBillingData.mainAdressZipcode}
                onChange={(e) =>
                  handleInputChange(
                    "personalBillingData",
                    "mainAdressZipcode",
                    e.target.value,
                  )
                }
              />
              <InputLabel
                type="text"
                id="main-adress-city"
                label="Miasto"
                value={formData.personalBillingData.mainAdressCity}
                onChange={(e) =>
                  handleInputChange(
                    "personalBillingData",
                    "mainAdressCity",
                    e.target.value,
                  )
                }
              />
            </div>
            {/* ... other input fields */}
          </FormFieldset>

          <div className="flex justify-center">
            <button
              className="btn-sm border-text"
              type="button"
              onClick={() =>
                setIsEditing((prev) => ({
                  ...prev,
                  personalBillingData: false,
                }))
              }
            >
              Zapisz
            </button>
          </div>
        </form>
      ) : (
        // Display data in list format for non-editing mode
        <div>
          <h2>Moje dane:</h2>
          <ul>
            <li>Imię: {formData.personalBillingData.mainAdressFirstname}</li>
            <li>Nazwisko: {formData.personalBillingData.mainAdressLastname}</li>
            <li>Email: {formData.personalBillingData.logInEmail}</li>
            <li>Telefon: {formData.personalBillingData.mainAdressPhone}</li>
          </ul>
          <h2>Adres rozliczeniowy:</h2>
          <ul>
            <li>Ulica: {formData.personalBillingData.mainAdressStreet}</li>
            <li>Kod: {formData.personalBillingData.mainAdressZipcode}</li>
            <li>Miasto: {formData.personalBillingData.mainAdressCity}</li>
          </ul>
        </div>
      )}
    </Box>
  );
}
