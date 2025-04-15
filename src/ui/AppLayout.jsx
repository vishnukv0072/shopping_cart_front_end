import Header from "./Header.jsx";
import {Outlet, useNavigation} from "react-router-dom";
import Loader from "./Loader.jsx";
import Footer from "./Footer.jsx";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="h-screen text-dark">
      {isLoading && <Loader/>}
      <Header/>
      <main className="max-w-[95rem] mx-auto bg-light">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default AppLayout;