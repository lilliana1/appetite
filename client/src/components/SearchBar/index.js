import React from "react";
import "./style.css";

function SearchBar(props) {
    return (
        <div className="container">
            {/* <form  onSubmit={props.handleClick,(e) => {
                e.preventDefault()
            }} > */}
                <input
                id="searchBarHome" 
                className="searchbar" 
                type="text" 
                placeholder="Type your location..."
                value={props.search}
                onChange={props.handleChange}
                // onKeyPress={props.handleClick}
                // onSubmit={props.handleClick}
                // onKeyPress={props.handleKeyPress}

                />
            {/* </form> */}
        </div>
    
    );
}

export default SearchBar;
