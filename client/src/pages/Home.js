import React from 'react';
import Head from '../components/Head'

function Home(props) {
    return (
        <div>
            <Head title={props.title} subTitle={props.subTitle} />
        </div>
        
    );

}
export default Home; 