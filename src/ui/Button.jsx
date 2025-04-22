function Button({children, type, onClick}) {
  const base = "rounded cursor-pointer p-3 ";
  const className = {
    dark: base + "bg-dark text-light",
    light: base + "bg-light text-dark"
  };
  return <button className={className[type]} onClick={onClick}>{children}</button>;
}

export default Button;