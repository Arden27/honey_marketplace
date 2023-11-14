import Box from "@/app/_layout/Box";
import Button from "@/components/Button";
import EditIcon from "public/icons/edit.svg";
import AtIcon from "public/icons/at.svg";
import PhoneIcon from "public/icons/phone.svg";
import FormFieldset from "@/components/forms/FormFieldset";
import InputLabel from "@/components/forms/InputLabel";
import Input from "@/components/forms/Input";

export default function BillingForm({
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
            personalBillingData: !prev.personalBillingData,
          }))
        }
      >
        <EditIcon />
      </Button>

      {/* ARTEM - problem z wyśrodkowaniem buttona i tytułu labela */}

      {isEditing.personalBillingData ? (
        // Input fields for editing mode
        <form className="grid gap-sm" onSubmit={(e) => e.preventDefault()}>
          <FormFieldset legend="Moje dane">
            <div className="flex gap-3xs md:flex-col lg:flex-row">
              {/* <InputLabel
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
              /> */}
              <Input
                type="text"
                id="main-adress-firstname"
                value={formData.personalBillingData.mainAdressFirstname}
                onChange={(e) =>
                  handleInputChange(
                    "personalBillingData",
                    "mainAdressFirstname",
                    e.target.value,
                  )
                }
              >
                <Input.Label type="" className={`absolute left-0 mx-md mt-sm items-center justify-center self-center bg-bg3 px-3xs text-center font-btn text-sm uppercase text-text before:content-["*"]`}>HELLO</Input.Label>
              </Input>
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
            <div className="flex gap-3xs md:flex-col lg:flex-row">
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
            <Button
              className="hover:text-bg3"
              format="sm"
              onClick={() =>
                setIsEditing((prev) => ({
                  ...prev,
                  personalBillingData: false,
                }))
              }
            >
              Zapisz
            </Button>
          </div>
        </form>
      ) : (
        // Display data in list format for non-editing mode
        <div className="  ">
          <h2>Moje dane:</h2>
          <ul className=" ml-3xs ">
            <li className=" font-serif ">
              {formData.personalBillingData.mainAdressFirstname}{" "}
              {formData.personalBillingData.mainAdressLastname}
            </li>

            <li className="flex items-center">
              <AtIcon />: {formData.personalBillingData.logInEmail}
            </li>
            <li className="flex items-center">
              <PhoneIcon />: {formData.personalBillingData.mainAdressPhone}
            </li>
          </ul>
          <h2>Adres rozliczeniowy:</h2>
          <ul className="ml-3xs">
            <li>{formData.personalBillingData.mainAdressStreet}</li>

            <li>
              {formData.personalBillingData.mainAdressZipcode}{" "}
              {formData.personalBillingData.mainAdressCity}
            </li>
          </ul>
        </div>
      )}
    </Box>
  );
}
