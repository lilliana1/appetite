import React from 'react';
import Image from "../components/Image";
import Map from "../components/Map";
import Review from "../components/Review";
import RestaurantDetails from "../components/RestaurantDetails"

function Details() {
    return (
        <div>
        <h1 >Name of place + in +  City </h1>
        <Image />  
        <RestaurantDetails />
        <Review />
        <Map />
        </div>
        
    );

}
export default Details; 