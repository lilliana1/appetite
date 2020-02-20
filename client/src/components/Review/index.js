import React from "react";

function Review() {
    return (
      <form>
      <div className="form-group">
        <label for="exampleFormControlSelect1">Rating ⭐️</label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option><span>⭐️</span></option>
          <option><span>⭐️⭐️</span></option>
          <option><span>⭐️⭐️⭐️</span></option>
          <option><span>⭐️⭐️⭐️⭐️</span></option>
          <option><span>⭐️⭐️⭐️⭐️⭐️</span></option>
        </select>
      </div>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">Review</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form>
    
    );
}

export default Review;
