import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <image alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Test1
                    </a>
                <div className="metadata">
                    <span className="date">
                        time 1
                        </span>
                </div>
                <div className="text">
                    comment 1
                    </div>
            </div>
        </div>
    );
}