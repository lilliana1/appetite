import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";



function RestaurantInfo() {
    return (
        <div>
        <table align="center" className="table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Restaurant</th>
                    <th scope="col">i</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><img></img></th>
                    <td>Vianda</td>
                    <td><Link to="/details">i</Link></td>
                </tr>
            </tbody>
        </table>
        </div>
    );
}

export default RestaurantInfo;
