import {useState} from "react";

function Search({className}) {
  const [query, setQuery] = useState("");
  const base = "rounded-full px-4 py-2 text-sm bg-light placeholder:text-slate-400 transition-all duration-300" +
    "w-28 sm:w-64 sm:focus:w-72 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 text-slate-800 "

  function handleSubmission(e) {
    e.preventDefault();

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