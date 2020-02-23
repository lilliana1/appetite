import React from 'react';
import SearchBarExplore from '../components/SearchBarExplore';
import API from "../utils/API";
// import "../components/Checkbox";
import Button from "../components/Button"
// import Checkbox from "../components/Checkbox"
// import { Link } from 'react-router-dom';


class Explore extends React.Component {

    state = {
        apiData: [],
        search: ""
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleClick = () => {
        console.log(this.state.search);


        API.getYelp(this.state.search)
            .then(data => {
                console.log(data.data.businesses);
                this.setState({
                    apiData: data.data.businesses
                })

            })
            .catch(err => {
                console.log(err);

            })




    }
    


    render() {

        return (
            <div>
                <br />

                {/* FIRST ROW */}
                <div className="row">
                    <p className="description col-3">
                        Appetite will help to explore restaurants near searched area.
            </p>
                    <br />
                    <div className="col-5">
                        <SearchBarExplore
                            handleChange={this.handleChange}
                            handleClick={this.handleClick}
                        />
                    </div>
                    <div className="col-2">
                        <Button
                            handleChange={this.handleChange}
                            handleClick={this.handleClick}
                        />
                    </div>

                </div>

                {/* SECOND ROW */}
                <br />

                <div className="row">

                    <div className="col-12">
                        {/* <RestaurantInfo /> */}
                        <table align="center" className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Restaurant</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Price</th>
                                    {/* <th scope="col">Hours</th> */}
                                    <th scope="col">Location</th>

                                    {/* <th scope="col">i</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.apiData.map(item => {
                                    return (
                                        <tr>
                                            <th scope="row"><img src={item.image_url} atl={item.name} /></th>
                                            <td>{item.name}</td>
                                            <td> {item.rating} </td>
                                            <td> {item.price} </td>
                                            <td> {item.location.display_address[0] + " " + item.location.display_address[1]} </td>
                                        </tr>

                                    )
                                })}

                            </tbody>
                        </table>

                        


                    </div>
                </div>
            </div>

        );

    }

}

export default Explore;



