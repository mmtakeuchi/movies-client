import React from "react";

const Search = (props) => {
  return (
    <div>
      <form>
        <input
          className="query"
          value={props.query}
          onChange={(e) => props.setQuery(e.target.value)}
          placeholder="Search Movies"
        ></input>
      </form>
    </div>
  );
};

export default Search;
