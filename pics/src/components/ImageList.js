import React from 'react';

const ImageList = (props) => {

    const images = 
        props.images.map(
            (imgObj, index) => {
                return (<img 
                    key={index} 
                    src={imgObj.image_url} 
                    alt={imgObj.name + " beer"} 
                />)
            }
        );
    return <div>{images}</div>;
}
export default ImageList;