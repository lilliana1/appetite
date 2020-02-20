import React from "react";
import "./style.css";

function SearchBarExplore() {
    return (
        <div className="container ">
        <input id="searchBar" className="searchbar" type="text" placeholder="Type city you would like to explore..."/>
        <a id="btnSearch" className="btn-search"></a>
        </div>
    
    );
}

export default SearchBarExplore;
