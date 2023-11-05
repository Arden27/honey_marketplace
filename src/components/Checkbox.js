export default function Checkbox({ className, children, ...props }) {
  return (
    <label
      className={`relative mb-2xs flex items-center
  
      ${className}
      `}
      {...props}
    >
      <input
        className="relative mr-xs h-sm w-sm flex-none appearance-none rounded-[2rem] border-2 border-text checked:after:absolute checked:after:-top-[9px] checked:after:left-[3px] checked:after:content-['\2714'] "
        type="checkbox"
      ></input>
      <div className=" after:-bottom-2xs text-sm text-text after:absolute  after:text-lg after:text-warning after:content-['*']">
        {children}
      </div>
    </label>
  );
}


// Artem - Dodać stan isRequired wtedy after:content-['*_'] after:content-[text-warning]