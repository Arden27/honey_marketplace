export default function BtnSm() {
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
