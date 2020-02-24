import React from 'react';
import SearchBarReview from '../components/SearchBarReview';
import Button from "../components/Button"
import API from "../utils/API"

class Review extends React.Component {

    state = {
        apiData: [],
        filtered: [],
        search: "",
        searchRest: "",
        restaurantName: "",
        restaurantId: "",
        reviewValue: "",
        reviewDescription: ""

    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    handleChangeRest = (e) => {
        this.setState({
            searchRest: e.target.value
        })

        console.log(e.target.value);

        let restSearch = this.state.apiData.filter(item => {

            let values = item.name.toLowerCase();
            return (values.indexOf(e.target.value) !== -1)
        })
        this.setState({
            filtered: restSearch
        })

    }

    handleClick = () => {
        console.log(this.state.search);


        API.getYelp(this.state.search)
            .then(data => {
                console.log(data.data.businesses);
                this.setState({
                    apiData: data.data.businesses,
                    filtered: data.data.businesses
                })

            })
            .catch(err => {
                console.log(err);

            })
    }
    handleChangeReviews = (e) => {
        console.log(e);

        const { name, value } = e.target;

        this.setState({
            [name]: value
        })

        console.log(this.state.reviewValue);
        console.log(this.state.reviewDescription);




    }
    handleClickReviews = (id, name) => {

        const reviewObj = {
            username: "testUser",
            restaurantName: name,
            restaurantId: id,
            rating: this.state.reviewValue,
            review: this.state.reviewDescription
        }


        API.saveReview(reviewObj)
            .then(data => console.log(data))
            .catch(err => console.log(err))





        console.log("yes");




    }
    
    itemDetail = (id) => {
        console.log(id);
        let singleDetail = this.state.apiData.filter(item => item.id === id)
        this.setState({
            restSelect: singleDetail[0]
        })
        console.log(this.state.restSelect.image_url);


    }

    showDetails = () => {
        console.log("yes");

        return (
            <div id="addReviewCol" >
            <td>

                <form>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Rating ⭐️</label>
                        <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            value={this.state.reviewValue}
                            onChange={this.handleChangeReviews}
                            name="reviewValue"
                        >
                            <option value="1">⭐️</option>
                            <option value="2">>>⭐️⭐️</option>
                            <option value="3">>⭐️⭐️⭐️</option>
                            <option value="4">>⭐️⭐️⭐️⭐️</option>
                            <option value="5">>⭐️⭐️⭐️⭐️⭐️</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Review</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            value={this.state.reviewDescription}
                            onChange={this.handleChangeReviews}
                            name="reviewDescription"

                        ></textarea>
                    </div>
                </form>
            </td>
        </div>
            

        )
    }









    render() {



        return (
            <div>
                <br />

                {/* FIRST ROW */}
                <div className="row jumbotron shadow-lg bg-white rounded">
                    <p className="description col-3">
                        Browse and login to share reviews, opinions and restaurant experiences with Appetite.
                    </p>
                    <br />
                    <div className="col-5">
                        <SearchBarReview
                            handleChange={this.handleChange}
                        />
                    </div>
                    <div className="col-2">
                        <Button
                            handleClick={this.handleClick}
                        />
                    </div>

                </div>


                <div className="row">

                    <div className="col-9">
                        <input
                            className="form-control"
                            id="myInput"
                            type="text"
                            placeholder="Search Restaurant..."
                            onChange={this.handleChangeRest} />
                        {/* <RestaurantInfo /> */}
                        <br />
                        <table align="center" className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Img</th>
                                    <th scope="col">Restaurant <i className="fas fa-utensils"></i></th>
                                    <th scope="col"> Appetite. Rating</th>
                                    <th scope="col"> view and add Reviews <i class="far fa-edit"></i></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.filtered.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row"> {item.name} </th>
                                            <td> {item.location.display_address[1]} </td>
                                            <td> Food was AMAZING! </td>
                                            <td> 
                                                <button
                                                onClick={() => this.handleClickReviews(item.id, item.name)}
                                            >Leave Review</button> 
                                            </td>

                                            {/* <div id="addReviewCol col-3" >
                                                <td>

                                                    <form>
                                                        <div className="form-group">
                                                            <label for="exampleFormControlSelect1">Rating ⭐️</label>
                                                            <select
                                                                className="form-control"
                                                                id="exampleFormControlSelect1"
                                                                value={this.state.reviewValue}
                                                                onChange={this.handleChangeReviews}
                                                                name="reviewValue"
                                                            >
                                                                <option value="1">⭐️</option>
                                                                <option value="2">>>⭐️⭐️</option>
                                                                <option value="3">>⭐️⭐️⭐️</option>
                                                                <option value="4">>⭐️⭐️⭐️⭐️</option>
                                                                <option value="5">>⭐️⭐️⭐️⭐️⭐️</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label for="exampleFormControlTextarea1">Review</label>
                                                            <textarea
                                                                className="form-control"
                                                                id="exampleFormControlTextarea1"
                                                                value={this.state.reviewDescription}
                                                                onChange={this.handleChangeReviews}
                                                                name="reviewDescription"

                                                            ></textarea>
                                                        </div>
                                                    </form>
                                                </td>
                                            </div> */}
                                        </tr>

                                    )
                                })}

                                <div className="col-4">
                                    {this.state.restaurantName.id === undefined ? "" : this.showDetails()}
                                </div>






                            </tbody>
                        </table>




                    </div>
                </div>
            </div>
        );

    }
}
export default Review; 