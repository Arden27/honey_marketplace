export default function FormFieldset({ children, legend }) {
  return (
    <fieldset className="">
      <legend className="">
        <h2>{legend}</h2>
      </legend>

      {children}
    </fieldset>
  );
}
