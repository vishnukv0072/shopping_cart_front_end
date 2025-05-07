function Button({children, type, onClick, disabled}) {
  const base = "rounded cursor-pointer p-3 h-[50px] ";
  const className = {
    dark: base + "bg-dark text-light",
    light: base + "bg-light text-dark",
    remove: base + "border border-slate-500 hover:border-red-200 hover:bg-red-800 hover:text-white",
    disabled: base + "bg-gray-300 text-gray-400"
  };
  return <button className={className[type]} onClick={onClick} disabled={disabled}>{children}</button>;
}

export default Button;