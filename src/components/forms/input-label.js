export default function InputLabel({ type, id, label, image }) {
    return (
      <>
        <div className="relative w-full">
          <input type={type} id={id} />
          
          {image ? 
          <label type={type} htmlFor={id} >
            {label}
          </label> 
          : 
          <div>Dupa</div>}
        </div>
      </>
    );
  }