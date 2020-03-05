import React from 'react';
import Auth from "../utils/Auth"
import SearchBarReview from '../components/SearchBarReview';
import ButtonReview from "../components/ButtonReview"
import API from "../utils/API"

class Review extends React.Component {

    state = {
        apiData: [],
        filtered: [],
        search: "",
        searchRest: "",
        restSelect: [],
        restaurantName: "",
        restaurantId: "",
        reviewValue: "",
        reviewDescription: "",
        isReviewOpen: false,
        isViewReviews: false,
        reviewData:[],
        chosenReviewData:{},
        reviewPercentage: []

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
            .then(data => {
                console.log(data)
                this.setState({
                    reviewValue: "",
                    reviewDescription: "",
                    isReviewOpen: !this.state.isReviewOpen
                })
            })
            .catch(err => console.log(err))

        console.log("AQUI");

    }
    
    itemDetail = (id) => {
        let singleDetail = this.state.apiData.filter(item => item.id === id)
        this.setState({
            restSelect: singleDetail[0],
            isReviewOpen: !this.state.isReviewOpen
        })

    }

    addReview = () => {
        console.log(this.state.restSelect.id);
        console.log(this.state.restSelect.name);

        
        return (
            <div id="addReviewCol">
                    <div className="form-group">
                        <label for="exampleFormControlSelect1">Rating ⭐️</label>
                        <select 
                            className="form-control"
                            id="exampleFormControlSelect1"
                            value={this.state.reviewValue}
                            onChange={this.handleChangeReviews}
                            name="reviewValue"
                        >
                            <option>Pick a Star</option>
                            <option value="1">⭐️</option>
                            <option value="2">⭐️⭐️</option>
                            <option value="3">⭐️⭐️⭐️</option>
                            <option value="4">⭐️⭐️⭐️⭐️</option>
                            <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="Textarea">Review</label>
                        <textarea
                            className="form-control"
                            id="Textarea"
                            value={this.state.reviewDescription}
                            onChange={this.handleChangeReviews}
                            name="reviewDescription"
                        ></textarea>
                    </div>
                    <button 
                    className="btn-success reviewbtn"
                    type="submit"
                    onClick={() => this.handleClickReviews(this.state.restSelect.id, this.state.restSelect.name)}
                    >
                        submit
                    </button>
            </div>
            

        ) 
    }

    componentDidMount() {
        API.getReviews()
        .then(data => {
            console.log(data)
            this.setState({
                reviewData: data.data
            })

            let sum = 0;
            let arraySum = []
            for (let i = 0; i < this.state.reviewData.length; i++) {
            console.log(this.state.reviewData[i].rating);
                
            
            this.state.reviewData[i].rating.forEach(item => {
                        sum += parseInt(item)

                        })
                        arraySum.push(sum/this.state.reviewData[i].rating.length.toFixed(2));
                        sum=0;
                        
            }
            console.log(arraySum);
            
            this.setState({
                reviewPercentage: arraySum
            })




        })
        .catch(err => console.log(err))
    }


    // when press view, this will display the reviews of selected restaurant
    // fix that when the restaurant selected has none reviews, alert
    // fix that the review corresponds to the right one
    viewReviewBtn = (id) => {
        let chosen= this.state.reviewData.filter(item => item.restaurantId === id)
        console.log(chosen);
        console.log("aqui sera?");
        
        
        this.setState({
            chosenReviewData: chosen[0],
            isViewReviews: !this.state.isViewReviews
        })

    }

    // reviews col that is on the right side when pressed view on review page
    viewReviews = (id) => {
        return (
            <div id="viewRevCol">
                <p className="paragraphDetails" id="restDetName"> {this.state.chosenReviewData.restaurantName}  Reviews </p>
                { this.state.chosenReviewData.review.map(item => (
                    <p className="paragraphDetails">- {item}  </p>
                )) }
                
            </div>

        )
    }



    render() {
        // console.log(this.state.restSelect);
        return (
            <div>
                <br />

                {/* FIRST ROW */}
                <div className="row review shadow-lg bg-white rounded">
                    <p className="description col-md-3">
                        Browse and login to share reviews, opinions and restaurant experiences with Appetite.
                    </p>
                    <br />
                    <div className="col-5">
                        <SearchBarReview
                            handleChange={this.handleChange}
                            
                        />
                    </div>
                    <div className="col-2">
                        <ButtonReview
                            handleClick={this.handleClick}
                        />
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-12">
                        <input
                            className="form-control"
                            id="myInput"
                            type="text"
                            placeholder="Search Restaurant..."
                            onChange={this.handleChangeRest} />
                        {/* <RestaurantInfo /> */}
                        <br />
                    </div>
                </div>

                <div className="row">
                        <div className="col-8">
                        <table align="center" className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"> Restaurant <i className="fas fa-utensils"></i></th>
                                    <th scope="col"> Rating</th>
                                    <th scope="col"> Reviews </th>
                                    <th scope="col"> Add Review <i className="far fa-edit"></i> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.filtered.map((item, i) => {
                                    console.log(item.image_url);
                                    
                                    return (
                                        <tr key={i}>
                                            <th scope="row"> <img src={item.image_url} alt={item.name}/> </th>
                                            <td> {item.name} </td>
                                            {/*      se supone que muestre el % del restaurante que es      */}
                                            <td> {this.state.reviewPercentage[i]} </td>
                                            <td> 
                                            <button  
                                                type="button"
                                                className="addReviewPointer btn btn-outline-dark"
                                                // onClick={() => this.handleClickReviews(item.id, item.name)}
                                                onClick={() => this.viewReviewBtn(item.id)}
                                                > view
                                                </button> 
                                            </td>
                                            {Auth.isAuthenticated ? 
                                            <td> 
                                                <button  
                                                type="button"
                                                className="addReviewPointer btn btn-outline-dark"
                                                onClick={() => this.itemDetail(item.id, item.name)}
                                                > add
                                                </button> 
                                            </td>
                                            :
                                            <td>Please <a href="/login">Log In</a> to add Review</td>
                                            }
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-4">
                        {/* {this.viewReviews()} */}
                        {this.state.isReviewOpen ? this.addReview() : ""}
                        {this.state.isViewReviews ? this.viewReviews(): ""}

                    </div>
                </div>
            </div>
        );

    }
}
export default Review; 