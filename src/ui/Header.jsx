import Logo from "./Logo.jsx";
import Search from "../features/search/Search.jsx";
import Navigation from "./Navigation.jsx";

function Header() {
  return (
    <header className="border-b border-slate-500 bg-dark px-4 py-3 text-slate-50 uppercase sm:px-6">
      <div
        className="flex items-center justify-between">
        <Logo/>
        <Search className="hidden sm:block"/>
        <Navigation/>
      </div>
      <Search className="block mt-5 sm:hidden"/>
    </header>
  );
}

export default Header;
