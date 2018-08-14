import React from 'react';

const Protected = (props) => {
    return ( 
        <p>You must log in to view the page at some {props.pathname}</p> 
    );
}
 
export default Protected;