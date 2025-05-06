function Button({children, type, onClick}) {
  const base = "rounded cursor-pointer p-3 h-[50px] ";
  const className = {
    dark: base + "bg-dark text-light",
    light: base + "bg-light text-dark",
    remove: base + "border border-slate-500 hover:border-red-200 hover:bg-red-800 hover:text-white"
  };
  return <button className={className[type]} onClick={onClick}>{children}</button>;
}

export default Button;