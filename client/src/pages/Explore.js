import React from 'react';
import SearchBarExplore from '../components/SearchBarExplore';
import API from "../utils/API";


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

render(){
    return (
        <div>
            
            <br />
            <SearchBarExplore
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            />
            
            <div>
            <h3>Restaurants</h3>
        {this.state.apiData.map( item => {
                return (
                    <div>                 
                    <a>{item.name}</a> 
                    {/* <img src={item.image_url} alt="test" /> */}
                    </div>
                )
        })}
        
            </div>
        </div>
        
    );

}
}
export default Explore; 


// function Explore() {
//     return (
//         <div>
//             <SearchBarExplore/>
//             <p className="description">
//             explaining what is explore by city
//             </p>
//         </div>

        
//     );

// }
// export default Explore; 