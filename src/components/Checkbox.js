export default function Checkbox({ className, children, ...props }) {
  return (
    <label
      className={`relative text-text flex items-center
  
      ${className}
      `}
      {...props}
    >
      <input
        className=" h-sm w-sm appearance-none rounded-[2rem] border-2  border-text  checked:after:absolute checked:after:left-[6px] checked:after:-top-[3px] checked:after:content-['\2714'] mr-3xs "
        type="checkbox"
      ></input>
      {children}
    </label>
  );
}
