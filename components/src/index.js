import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="test1" />
            <CommentDetail author="test2" />
            <CommentDetail author="test3" />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))