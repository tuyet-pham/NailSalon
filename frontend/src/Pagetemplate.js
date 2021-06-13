import React from 'react';
import { Route } from "react-router-dom";


const PageTemplate = ({component: Component, isLoggedIn, ...rest}) => {

    return (
        <Route {...rest} component={matchProps =>   
            <div className="PageTemplate">
                <Component {...matchProps} />
            </div>
        } />
    );
};

export default PageTemplate;