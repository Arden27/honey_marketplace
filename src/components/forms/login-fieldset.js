import FormFieldset from "@/components/forms/form-fieldset";
import InputLabel from "@/components/forms/input-label";

export default function LoginFieldset(){
    return (
        <FormFieldset legend="Twoje dane">
            <InputLabel type="email" id="log-in-email" label="E-mail" />
            <InputLabel type="password" id="log-in-password" label="Hasło" />
        </FormFieldset>
    )
}