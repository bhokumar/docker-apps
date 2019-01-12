import React from 'react';
import { Link } from 'react-router-dom';

const otherComponent = () => {
    return(
        <div>
            In some other page
            <Link to = "/">Go Back home</Link>
        </div>
    );
}

export default otherComponent;