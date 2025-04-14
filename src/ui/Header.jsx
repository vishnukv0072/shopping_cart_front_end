import Logo from "./Logo.jsx";
import Search from "./Search.jsx";
import Navigation from "./Navigation.jsx";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-500 bg-dark px-4 py-3 text-slate-50 uppercase sm:px-6">

      <Logo/>
      <Search/>
      <Navigation/>
    </header>
  );
}

export default Header;
