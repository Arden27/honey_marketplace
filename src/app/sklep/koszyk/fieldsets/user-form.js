import FormFieldset from "@/components/form/form-fieldset";
import InputLabel from "@/components/form/input-label";

export default function UserFieldset(){
    return (
        <FormFieldset legend="Twoje dane">
            <InputLabel type="email" id="log-in-email" label="*E-mail" />
            <InputLabel type="phone" id="log-in-phone" label="*Nr telefonu" />
        </FormFieldset>
    )
}