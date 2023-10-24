export default function InputLabel({ type, id, label }) {
    return (
      <>
        <input type={type} id={id} />
        <label htmlFor={id}>{label}</label>
      </>
    );
  }