import React from 'react';
import SearchBar from '../components/SearchBar';

function Home() {
    return (
        <div>
            <SearchBar/>
            <p className="description">
            Appetite will help to search restaurants that are open at a specific time.
            </p>
        </div>
        
    );

}
export default Home; 