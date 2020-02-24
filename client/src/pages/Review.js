import React from 'react';
import SearchBarReview from '../components/SearchBarReview';
import Button from "../components/Button"

function Review() {
    return (
        <div>
                <br />

                {/* FIRST ROW */}
                <div className="row jumbotron shadow-lg bg-white rounded">
                    <p className="description col-3">
                        Appetite. will help to explore restaurants near searched area.
                    </p>
                    <br />
                    <div className="col-5">
                        <SearchBarReview
                            // handleChange={this.handleChange}
                            // handleClick={this.handleClick}
                        />
                    </div>
                    <div className="col-2">
                        <Button
                            // handleChange={this.handleChange}
                            // handleClick={this.handleClick}
                        />
                    </div>

                </div>
        </div>
    );

}
export default Review; 