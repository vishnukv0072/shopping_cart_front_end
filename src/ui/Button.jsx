function Button({children, type, onClick}) {
  const base = "rounded cursor-pointer p-3 h-[50px] ";
  const className = {
    dark: base + "bg-dark text-light",
    light: base + "bg-light text-dark",
    remove: base + "bg-red-700 text-light"
  };
  return <button className={className[type]} onClick={onClick}>{children}</button>;
}

export default Button;