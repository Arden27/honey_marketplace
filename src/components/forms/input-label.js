export default function InputLabel({ type, id, label, ...props }) {
  return (
    <div className="relative w-full">
      <input type={type} id={id} name={id} {...props} />
      <label type={type} htmlFor={id}>{label}</label> 
    </div>
  );
}