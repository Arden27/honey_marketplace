import FormFieldset from "@/components/forms/FormFieldset";
import InputLabel from "@/components/forms/InputLabel";

export default function LoginFieldset(){
    return (
        <FormFieldset legend="Twoje dane">
            <InputLabel type="email" id="log-in-email" label="E-mail" />
            <InputLabel type="password" id="log-in-password" label="Hasło" />
        </FormFieldset>
    )
}