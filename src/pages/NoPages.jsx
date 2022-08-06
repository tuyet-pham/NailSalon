import { useEffect } from "react";
import React from 'react';


function NoPages() {
    useEffect(() => {
        window.scrollTo(0, 0);
        window.top.document.title = "5 Star Nail Spa | 404 Error"
    });

    const nopagestyle = {
        marginTop: "100px",
        textAlign: "center",
        height: "70vh",
    }
    
    return (
        <div style={nopagestyle}>
            <h1>404 No such link :(</h1>
        </div>
    );
}

export default NoPages;