import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    return (  
        <img
          src={props.src}
          alt={props.alt}
          width={props.width}
        />
    );
}
 
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string
}

export default Image;