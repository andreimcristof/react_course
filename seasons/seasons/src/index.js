import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, errorMsg: '' }

    renderContent() {
        if(this.state.errorMsg && !this.state.lat) {
            return <div>Error: {this.state.errorMsg}</div>
        }
        if(!this.state.errorMsg && !this.state.lat) {
            return <Spinner message="Please accept location request" />
        }
        if(!this.state.errorMsg && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
    }
    
    render(){
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }

    componentDidMount() {
        this.fetchCoords();
    }

    fetchCoords() {
        window.navigator.geolocation.getCurrentPosition(
            pos => this.setState({ lat: pos.coords.latitude }), 
            err => this.setState({ errorMsg: err.message })
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)