export default function Icon() {
  return (
    <div>
      <div className={`p-20 
      ${type === "button" ? "hidden" :""}    
      ${type === "submit" ? "flex" : ""}  `}>
        BtnSm
      </div>
    </div>
  );
}
