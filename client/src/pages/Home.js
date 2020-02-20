import React from 'react';
import SearchBar from '../components/SearchBar';
import API from "../utils/API";
import "../components/Checkbox";
import { Link } from 'react-router-dom';
import RestaurantInfo from "../components/RestaurantInfo";


class Home extends React.Component {

    state = {
        apiData: [],
        search: "",
        categories: []
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
            this.state.apiData.map( item => {
                let allCatAll = [];
                let filterCat = []
                allCatSingle.push(item.categories.map(cat => cat.title))
                allCatAll = allCatAll.concat(allCatSingle).flat()
                filterCat = allCatAll.filter( (cat,i) => allCatAll.indexOf(cat) === i )
                this.setState({
                    categories: filterCat
                })
            })



        })
        .catch(err => {
            console.log(err);
            
        })
    }


render(){
    
    return (
        <div>
            <p className="description">
            Appetite will help to search restaurants that are open at the specific time of searching.
            </p>
            <br />
            <SearchBar
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            />
            <div className="row">
                <div className="col-2 categories">
                <h3 className="categories">Categories</h3>
                {/* <button type="submit" >click me </button> */}

                        <div>    
                        <form className="categories">
                            <button id="categoriesSearchButton">Search</button>
                            {this.state.categories.map(category => {
                            
                                return (
                                <div>
                                <input className="form-check-input" type="checkbox" value={category} id="defaultCheck1" />
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
                    return(
                        <tr>
                    <th scope="row"><img src={item.image_url} atl={item.name} /></th>
                    <td>{item.name}</td>
                    <td><Link to="/details">i</Link></td>
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
export default Home; 

