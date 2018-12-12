import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const submitText = 'Submit';
    let style = {backgroundColor: 'blue', color: 'white'};

    return (
        <div>
            <label className="label" htmlFor="name">Enter name</label>
            <input id="name" type="text" />
            <button style={style}>
                {submitText}
            </button>
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);