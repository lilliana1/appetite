import React from 'react';
import Logo from '../components/Logo';

function About() {
    return (
        <div>
            <div>
            <Logo />
            </div>
            
            <br />
            {/* STORY */}
            <h3>About Appetite.</h3>
            <p>
                Imagine you just got to a new city and don’t know anything about it when it comes to eat! What’s the point of searching on an engine and noticing that places are fast foods (why eat fast food or big food national food chains when there are so many places to eat great food?), close or too far away from you? Appetite. is here to make that browsing experience unique.
            </p>
            {/* WHY APPETITE */}
            <br />
            <h3>Why Appetite.?</h3>
            <p>
            Stop wasting hours in a new city when you are searching for a place to eat. Appetite. is here to help you make that search way easier by filtering restaurants where you can have new experiences and great food near you!
            </p>

            <br />
            <h4>How's behind the creation of Appetite.?</h4>
            <p>
            Lilliana Ramos created Appetite. in 2020 with the mission to help foodies search places to eat that are open at the specific time of searching. 
            </p>
            <br />
            {/* API USED */}
            <h5>API</h5>
            <p>
            Appetite. use Yelp's amazing API.
            </p>



        </div>
        
    );

}
export default About; 