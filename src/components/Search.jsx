// TODO: import useLocation from react-router-dom
import { useLocation, useNavigate } from "react-router-dom";
import React, {useState} from 'react';
function Search() {

  // TODO: create a variable to use the location hook
  const location = useLocation();
  const navigate = useNavigate();
  // TODO: use URLSearchParams to get the query parameter from the URL
  const params = new URLSearchParams(location.search);
  // TODO: get the value of the query "q" parameter
  const [query, setQuery] = useState(params.get("q")||"" );

const handleSubmit = (e) => {
  e.preventDefault();
  if(query.trim());
  if(query.trim()){
    navigate(`?q=${encodeURIComponent(query)}`, { replace: true });
    return;
  }
  };

  return (
    <div>
      <h1>Search Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      {/* TODO: display the query parameter */}
      <h1>Search Results for: {query}</h1>
    </div>
  );
}

export default Search;
