import './ImageList.css'
import ImageCard from './ImageCard';
import React from 'react';

const ImageList = (props) => {

    const images = 
        props.images.map(
            (imgObj, i) => {
                return (
                    <ImageCard key={i} imgObj={imgObj} />
                )
            }
        );
    return <div className="image-list">{images}</div>;
}
export default ImageList;