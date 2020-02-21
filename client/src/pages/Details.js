import React from 'react';
import Image from "../components/Image";
import Map from "../components/Map";
import Review from "../components/Review";
import RestaurantDetails from "../components/RestaurantDetails"
import { Link } from 'react-router-dom';

function Details() {
    return (
        <div>
            <div className="row">
                <p><Link to="/">back</Link></p>

                <h1 >Name of place + in +  City </h1>
            </div>
            <div className="row">
                <div className="col-3 imageCol">
                    {/* <Image /> */}
                    <div className="card">
                        <img className="card-img-top" src="https://www.macworld.co.uk/cmsdata/features/3681000/how-to-upload-full-size-photos-instagram-iphone-main_thumb1200_4-3.png" alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text"> Images from Yelp </p>
                        </div>
                    </div>
                </div>
                <div className="col-5 restaurantDetCol">
                    {/* <RestaurantDetails /> */}

                    <div className="card">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"> Yelp's Rating: </li>
                            <li className="list-group-item"> Price: </li>
                        </ul>
                    </div>
                </div>
                <div className="col-3 mapCol">
                    {/* <Map /> */}

                    <div className="card">
                        <img className="card-img-top" src="https://www.google.com/images/branding/product/2x/maps_96in128dp.png" alt="Card image cap" />
                        <div className="card-body">
                            <p className="card-text">Maps</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <Review /> */}
                    {/* <div className=""> */}
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Rating ⭐️</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>⭐️</option>
                                <option>⭐️⭐️</option>
                                <option>⭐️⭐️⭐️</option>
                                <option>⭐️⭐️⭐️⭐️</option>
                                <option>⭐️⭐️⭐️⭐️⭐️</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Review</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                    {/* </div> */}
                </div>

            </div>
        </div>


    );

}
export default Details; 