import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return (
        <div>
            Home
            <Link to="/registry">Click here to go to registry</Link>
        </div>
    )
}

export default Home;