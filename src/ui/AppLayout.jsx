import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.jsx";
import Loader from "./Loader.jsx";

function AppLayout() {
  return (
    <div className="h-screen text-dark">
      <Loader/>
      <Header/>
      <main className="max-w-[95rem] mx-auto bg-light min-h-[54.8%]">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default AppLayout;