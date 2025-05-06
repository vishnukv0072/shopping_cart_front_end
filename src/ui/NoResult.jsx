import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getSearchQuery} from "../features/search/searchSlice.js";

function NoResult() {
  const product = useSelector(getSearchQuery);
  useEffect(() => {
    const element = document.getElementsByTagName("main")[0];
    element.classList.remove("bg-light");
    element.classList.add("bg-white");

    return () => {
      element.classList.remove("bg-white");
      element.classList.add("bg-light");
    }
  }, []);

  return (
    <div className="py-20">
      <div className="flex justify-center">
        <img src="/public/shoppingCartNoResult.png" alt="No results found" className="w-50"/>
      </div>
      <p className="font-semibold text-xl text-center">Sorry, the product "<span className="text-red-800">{product}</span>" is not
        found
      </p>
    </div>
  );
}

export default NoResult;