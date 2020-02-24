import React from 'react';
import API from "../utils/API";
import Checkbox from "../components/Checkbox";
import Map from "../components/Map";

class City extends React.Component {

    state = {
        apiData: [],
        result: ""
    }
    
    handleChange = (e) => {
        this.setState({
            result: e.target.value
        }) 
    }

    handleClick = () => {
        console.log(this.state.result);
        

        API.getYelp(this.state.result)
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
        <h1>City</h1>
        <p>Here you will be able to see and filter what you want to eat</p>
        {/* <Checkbox /> */}
        {/* <Map /> */}
        <div>
            <h3>Restaurants</h3>
        {this.state.apiData.map( item => {
                return (
                    <div>    
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" for="defaultCheck1">
                            {item.businesses.title}
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

export default City; 