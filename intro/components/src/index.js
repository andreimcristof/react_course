import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    You sure?  
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="test1" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="test2" />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="test3" />
            </ApprovalCard>
            
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))