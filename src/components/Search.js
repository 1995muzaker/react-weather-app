import React from "react";
import { SearchDiv } from "../styles/Weather";

const Search = ({ changeLocation, changeRegion }) => {
  return (
    <SearchDiv>
      <div className="col-md-6">
        <form
          className="region"
          onSubmit={(e) => {
            changeLocation(e);
          }}
        >
          <input
            type="text"
            className="regioninput"
            placeholder="Select your region"
            onChange={(e) => {
              changeRegion(e.target.value);
            }}
          />
        </form>
      </div>
    </SearchDiv>
  );
};

export default Search;
