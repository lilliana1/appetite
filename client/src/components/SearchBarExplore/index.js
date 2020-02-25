import React from "react";
import "./style.css";

function SearchBarReview(props) {
    return (
        <div className="container jumbotronReview">
        <input
        id="searchBar" 
        className="searchbar" 
        type="text" 
        placeholder="Type city you would like to explore..."
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

export default SearchBarReview;
