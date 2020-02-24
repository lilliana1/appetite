import React from "react";
import "./style.css";

function SearchBarExplore(props) {
    return (
        <div className="container">
        <input
        id="searchBar" 
        className="searchbar" 
        type="text" 
        placeholder="Type restaurant to leave review..."
        value={props.search}
        onChange={props.handleChange}
        />
        <a id="btnSearch" className="btn-search"></a>
        {/* <div className="back"> */}
        {/* <div onClick={props.handleClick} type="submit" className="button_base b05_3d_roll">
            <button>Here we go!</button>
            <button>Let's explore</button>
        </div> */}
        {/* </div> */}
        </div>
        
    );
}

export default SearchBarExplore;