export default function FormFieldset({ children, legend }) {
    return (
      <fieldset className="flex flex-col">
        <legend>
          <h2>{legend}</h2>
        </legend>
        {children}
      </fieldset>
    );
  }