import React from 'react';
import SearchBarReview from '../components/SearchBarReview';
import Button from "../components/Button"
import API from "../utils/API"

class Review extends React.Component {

    
    state = {
        apiData: [],
        filtered: [],
        search: "",
        searchRest:"",
        restaurantName: [],
        restaurantId:[],
        reviewValue:"",
        reviewDescription:""

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
            return ( values.indexOf(e.target.value) !== -1 )
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

    handleClickReviews = () => {






    }
    
    
    
    
    render() {

    

    return (
        <div>
                <br />

                {/* FIRST ROW */}
                <div className="row jumbotron shadow-lg bg-white rounded">
                    <p className="description col-3">
                    Log in to browse and share reviews, opinions and restaurant experiences with Appetite. 
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

                    <div className="col-12">
                    <input 
                        className="form-control" 
                        id="myInput" 
                        type="text" 
                        placeholder="Search.."
                        onChange={this.handleChangeRest} />
                        {/* <RestaurantInfo /> */}
                        <table align="center" className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Restaurant <i class="fas fa-utensils"></i></th>
                                    <th scope="col">Location</th>
                                    <th scope="col"> Reviews</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.filtered.map((item, i)=> {
                                    return (
                                        <tr>
                                    <th scope="row"> {item.name} </th>
                                    <td> {item.location.display_address[1]} </td>
                                    <td> Food was AMAZING! </td>
                                    <td> <button >Leave Review</button> </td>
                                    <td>

                                        <form>
                                        <div className="form-group">
                                            <label for="exampleFormControlSelect1">Rating ⭐️</label>
                                            <select className="form-control" id="exampleFormControlSelect1">
                                                <option value="1">⭐️</option>
                                                <option>⭐️⭐️</option>
                                                <option>⭐️⭐️⭐️</option>
                                                <option>⭐️⭐️⭐️⭐️</option>
                                                <option>⭐️⭐️⭐️⭐️⭐️</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlTextarea1">Review</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                                        </div>
                                    </form>
                                    </td>
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
export default Review; 