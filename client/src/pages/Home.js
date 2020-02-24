import React from 'react';
import SearchBar from '../components/SearchBar';
import API from "../utils/API";
import Button from "../components/Button"




class Home extends React.Component {

    state = {
        apiData: [],
        search: "",
        categories: [],
        restSelect: []
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleClick = () => {
        console.log(this.state.search);


        API.getYelpOpenNow(this.state.search)
            .then(data => {
                console.log(data.data.businesses);
                this.setState({
                    apiData: data.data.businesses
                })
                let allCatSingle = [];
                this.state.apiData.map(item => {
                    let allCatAll = [];
                    let filterCat = []
                    allCatSingle.push(item.categories.map(cat => cat.title))
                    allCatAll = allCatAll.concat(allCatSingle).flat()
                    filterCat = allCatAll.filter((cat, i) => allCatAll.indexOf(cat) === i)
                    this.setState({
                        categories: filterCat
                    })
                })



            })
            .catch(err => {
                console.log(err);

            })
    }

    handleCategorySubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    handleChangeCheck = (e) => {
        console.log(e.target.value);
        let catLower = e.target.value.toLowerCase()
        API.getYelpCat(this.state.search, catLower)
            .then(data => {

                this.setState({
                    apiData: data.data.businesses
                })

                let fullCatArr = this.state.apiData;
                // console.log(fullCatArr);
                // fullCatArr.push(data.data.businesses)
                // console.log(fullCatArr.flat());

                this.setState({
                    apiData: fullCatArr.flat()
                })

            })
            .catch(err => {
                console.log(err);
            })
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
            <div id="detailsCol">
                <img className="imageDetails" src={this.state.restSelect.image_url} alt={this.state.restSelect.name} />
                <p className="paragraphDetails" id="restDetName"> {this.state.restSelect.name} </p>
                <p className="paragraphDetails"> <i class="fab fa-yelp"></i> Rating: {this.state.restSelect.rating}  </p>
                <p className="paragraphDetails"> <i class="fab fa-yelp"></i> Price: {this.state.restSelect.price}  </p>
                <p className="paragraphDetails"> Address: {this.state.restSelect.location.display_address[0] + " " + this.state.restSelect.location.display_address[1]}  </p>
                <p className="paragraphDetails"> Reviews:  </p>
                <p className="paragraphDetails"> username: this places is amazing!  </p>
                {/* <form>
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
                            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                        </div>
                    </form> */}

            </div>

        )
    }


    render() {
        console.log(this.state.restSelect);

        return (
            <div>
                <br />
                {/* FIRST ROW */}
                <div className="row jumbotron shadow-lg bg-white rounded">
                    <p className="description col-3">
                        Appetite. will help to search restaurants that are open at the specific time of searching.
                    </p>
                    <br />
                    <div className="col-5">
                        <SearchBar
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
                    <div className="col-2 categories">
                        <h3 className="categories">Categories</h3>

                        <div>
                            <form className="categories" onSubmit={this.handleCategorySubmit}>
                                {this.state.categories.map(category => {

                                    return (
                                        <div>
                                            <input className="form-check-input" type="checkbox" name="restaurantCat" value={category} id="defaultCheck1"
                                                onChange={this.handleChangeCheck} />
                                            <label className="form-check-label" for="defaultCheck1">
                                                {category}
                                            </label>
                                        </div>

                                    )
                                })}
                            </form>
                        </div>


                    </div>
                    <div className="col-6">
                        {/* <RestaurantInfo /> */}
                        <table align="center" className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Restaurant <i class="fas fa-utensils"></i></th>
                                    <th scope="col">i</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.apiData.map(item => {
                                    return (
                                        <tr>
                                            <th scope="row"><img src={item.image_url} atl={item.name} /></th>
                                            <td>{item.name}</td>
                                            <td className="infoPointer" onClick={() => this.itemDetail(item.id)}>i</td>
                                        </tr>

                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                    <div className="col-4">
                        {this.state.restSelect.id === undefined ? "" : this.showDetails()}
                    </div>
                </div>
            </div>

        );

    }
}
export default Home;
