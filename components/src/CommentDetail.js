import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                    </a>
                <div className="metadata">
                    <span className="date">
                        {new Date().toDateString()}
                        </span>
                </div>
                <div className="text">
                    comment 1
                    </div>
            </div>
        </div>
    );
}
export default CommentDetail;