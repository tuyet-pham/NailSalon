import React, {useLayoutEffect} from 'react';
import { Route, useLocation } from "react-router-dom";


const PageTemplate = ({component: Component, ...rest}) => {
    const location = useLocation();

    // Scroll to top if path changes
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);


    return (
        <Route {...rest} component={matchProps =>   
            <div className="PageTemplate">
                <Component {...matchProps} />
            </div>
        } />
    );
};

export default PageTemplate;