export default function FormFieldset({ children, legend }) {
  return (
    <fieldset className="">
      <legend className="mb-3xs">
        <h2>{legend}</h2>
      </legend>

      {children}
    </fieldset>
  );
}
