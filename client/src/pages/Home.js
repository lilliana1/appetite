import React from 'react';
import SearchBar from '../components/SearchBar';
import API from "../utils/API";
// import "../components/Checkbox/styleCheckbox.css";
import "../components/Checkbox";



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
            
            <div class="categories">
            <h3 id="categoriesHeader">Categories</h3>
            <button type="submit" >click me </button>
       
                    <div>    
                    <form>
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
        </div>
        
    );

}
}
export default Home; 

