import React from 'react';
import SearchBar from '../components/SearchBar';
import API from "../utils/API";
// import "../components/Checkbox";
import Button from "../components/Button"
// import Checkbox from "../components/Checkbox"
import { Link } from 'react-router-dom';


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
                <>
                <img src={this.state.restSelect.image_url} alt={this.state.restSelect.name} />
                <h2> {this.state.restSelect.name} </h2>
                <h2> Yelp's Rating: {this.state.restSelect.rating}  </h2>
                <h2> Yelp's price: {this.state.restSelect.price}  </h2>
                </>
        )
    }


    render() {
        console.log(this.state.restSelect);
        
        return (
            <div>
            <br />
                {/* FIRST ROW */}
                <div className="row">
                    <p className="description col-3">
                        Appetite will help to search restaurants that are open at the specific time of searching.
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
                        {/* <button type="submit" >click me </button> */}

                        <div>
                            <form className="categories" onSubmit={this.handleCategorySubmit}>
                                <button  type="submit" id="categoriesSearchButton">Search</button>
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

                            {/* <button>{item.categories[0].title}</button> */}
                            {/* <img src={item.image_url} alt="test" /> */}
                        </div>


                    </div>
                    <div className="col-6">
                        {/* <RestaurantInfo /> */}
                        <table align="center" className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Restaurant</th>
                                    <th scope="col">i</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.apiData.map(item => {
                                    return (
                                        <tr>
                                            <th scope="row"><img src={item.image_url} atl={item.name} /></th>
                                            <td>{item.name}</td>
                                            <td onClick={() => this.itemDetail(item.id)}>i</td>
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
