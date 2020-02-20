import React from "react";
import "./style.css";

function SearchBar(props) {
    return (
        <div className="container">
        <input
        id="searchBar" 
        className="searchbar" 
        type="text" 
        placeholder="Type your location..."
        value={props.search}
        onChange={props.handleChange}
        />
        {/* <a id="btnSearch" className="btn-search"></a>
        <button type="submit" onClick={props.handleClick}> Click Me..!</button> */}
{/* new */}

        <div className="back ">
        <div onClick={props.handleClick} type="submit" className="button_base b05_3d_roll">
            <button>Here we go!</button>
            <button>Let's explore</button>
        </div>
        </div>
        {/* end new */}
        </div>
    
    );
}

export default SearchBar;
