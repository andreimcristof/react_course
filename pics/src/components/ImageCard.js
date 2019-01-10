import React from  'react';

class ImageCard extends React.Component {
    state = { spans: 0 };

    constructor(props) {
        super(props); 
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = _ => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/150);
        this.setState({ spans })
    }

    render() {
        const { image_url, name } = this.props.imgObj;
        return ( 
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    ref={this.imageRef}
                    src={image_url} 
                    alt={name + ' beer'} 
                />  
            </div>
        )
    }
}
export default ImageCard;