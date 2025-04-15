function Button({children, type}) {
  const base = "rounded cursor-pointer p-3 ";
  const className = {
    dark: base + "bg-dark text-light",
    light: base + "bg-light text-dark"
  };
  return <button className={className[type]}>{children}</button>;
}

export default Button;