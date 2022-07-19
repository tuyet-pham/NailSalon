import React from 'react';

function NoPages() {
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