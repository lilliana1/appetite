import React from "react";
import "./style.css";

function SearchBar() {
    return (
        <div className="container">
        <input id="searchBar" className="searchbar" type="text" placeholder="Type your city..."/>
        <a id="btnSearch" className="btn-search"></a>
        </div>
    
    );
}

export default SearchBar;
