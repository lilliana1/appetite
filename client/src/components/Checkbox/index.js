import React from 'react';
import "./styleCheckbox.css";


function Checkbox() {
    return (
        <div className="form-check">
            <h1>Categories</h1>
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            <label className="form-check-label" for="defaultCheck1">
                populate each check with the Categories
            </label>
        </div>
        
    );

}
export default Checkbox; 