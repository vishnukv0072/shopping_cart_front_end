import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setLoading} from "./searchSlice.js";

function Search({className}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const base = "rounded-full px-4 py-2 text-sm bg-light placeholder:text-slate-400 transition-all duration-300" +
    "w-28 sm:w-64 sm:focus:w-72 focus:outline-none focus:ring focus:ring-white-500 focus:ring-opacity-50 text-slate-800 "

  function handleSubmission(e) {
    e.preventDefault();
    dispatch(setLoading(true));
    navigate(`/products/${query}`);
  }

  return (
    <form onSubmit={handleSubmission}>
      <input type="text" value={query} placeholder="Search"
             className={base + className}
             onChange={e => setQuery(e.target.value)}/>
    </form>
  )
}

export default Search;