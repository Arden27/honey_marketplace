export default function FormFieldset({ children, legend }) {
    return (

      // ARTEM - Czy tutaj powinno być <form>??? Dodałem jak coś...
      
      <form >
        <fieldset className="">
          <legend className="mb-3xs">
            <h2>{legend}</h2>
          </legend>


          {children}
        </fieldset>
      </form>
    );
  }