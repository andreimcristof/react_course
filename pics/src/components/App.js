import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import axios from 'axios';

class App extends React.Component {
    state = { images: [] };

    onSearchBarSubmit = async (searchTerm) => {
        const res = await axios
            .get('https://api.punkapi.com/v2/beers?page=1&per_page=30');

        this.setState({ images : res.data })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSearchBarSubmit={this.onSearchBarSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App;