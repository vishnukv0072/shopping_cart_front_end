import {useNavigation} from "react-router-dom";
import {getIsSearching} from "../features/search/searchSlice.js";
import {useSelector} from "react-redux";
import {getCartLoading} from "../features/cart/cartSlice.js";

function Loader() {
  const navigation = useNavigation();
  const isSearching = useSelector(getIsSearching);
  const cartLoading = useSelector(getCartLoading);
  const isLoading = navigation.state === "loading" || isSearching || cartLoading;
  if (!isLoading) return null;
  return (
    <div className="fixed w-dvw h-full bg-slate-200/20 backdrop-blur-sm z-99">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;