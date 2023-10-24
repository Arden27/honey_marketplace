import FormFieldset from "@/components/form/form-fieldset";
import InputLabel from "@/components/form/input-label";

export default function AddressFieldset(){
    return (
        <FormFieldset legend="Dane adresowe">
            <InputLabel type="text" id="address-firstname" label="*Imie" />
            <InputLabel type="text" id="address-lastname" label="*Nazwisko" />
            <InputLabel type="text" id="address-street" label="*Ulica i nr domu" />
            <InputLabel type="text" id="address-zipcode" label="*Kod pocztowy" />
            <InputLabel type="text" id="address-city" label="*Miasto" />
            <InputLabel type="text" id="address-country" label="*kraj" />
        </FormFieldset>
    )
}