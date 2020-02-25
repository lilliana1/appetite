import React from "react";
import "./style.css";

function ButtonReview(props) {
    return (
        <div className="back button">
        <div onClick={props.handleClick} type="submit" className="button_base b05_3d_roll">
            <button>Here we go!</button>
            <button>Let's review</button>
        </div>
        </div>
        
    );
}

export default ButtonReview;
