import React from 'react';
// import faker from 'faker';

const CommentDetails = props => {
    // console.log(props); props holds the information sent by parent component
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.img} />
                </a>
            
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
            
            <div className="metadata">
                <span className="date">{props.timeAgo}</span>
            </div>
            <div className="text">{props.desc}</div>
        </div>
        </div>
    );
};

export default CommentDetails;