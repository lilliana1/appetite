import React from "react";
import "./style.css";

function SearchBar() {
    return (
        <div className="container">
        <input id="searchBar" className="searchbar" type="text" placeholder="Search..."/>
        <a id="btnSearch" className="btn-search"><i className="fa fa-search"></i></a>
        </div>
        
    
    );
}

export default SearchBar;
