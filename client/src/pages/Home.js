import React from 'react';
import SearchBar from '../components/SearchBar';
import API from "../utils/API";
import "../components/Checkbox/styleCheckbox.css";


class Home extends React.Component {

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

render(){
    return (
        <div>
            <p className="description">
            Appetite will help to search restaurants that are open at the specific time of searching.
            </p>
            <SearchBar
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            />
            
            <div>
            <h3>Categories</h3>
        {this.state.apiData.map( item => {
                return (
                    <div>    
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" for="defaultCheck1">
                            {item.categories[0].title}
                        </label>
                    {/* <button>{item.categories[0].title}</button> */}
                    {/* <img src={item.image_url} alt="test" /> */}
                    </div>
                )
        })}
            </div>
        </div>
        
    );

}
}
export default Home; 