import Header from "./Header.jsx";
import {Outlet, useNavigation} from "react-router-dom";
import Loader from "./Loader.jsx";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] text-dark">
    {isLoading && <Loader/>}
      <Header/>
      <div className="overflow-y-auto">
      <main className="max-w-[95rem] mx-auto bg-light">
        <Outlet/>
      </main>
      </div>
    </div>
  );
}

export default AppLayout;