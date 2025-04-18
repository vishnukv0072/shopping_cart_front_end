import {useNavigation} from "react-router-dom";
import {getIsSearching} from "../features/search/SearchSlice.js";
import {useSelector} from "react-redux";

function Loader() {
  const navigation = useNavigation();
  const isSearching = useSelector(getIsSearching);
  const isLoading = navigation.state === "loading" || isSearching;
  if (!isLoading) return null;
  return (
    <div className="fixed w-dvw h-full bg-slate-200/20 backdrop-blur-sm z-99">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;