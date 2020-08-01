import React from 'react';
import './Comment.sass';

function Comment({ title, text }) {
    return (
        <div className="comment">
            <div className="comment__avatar">
                <img
                    className="comment__avatar-img"
                    src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
                    alt=""
                />
            </div>
            <div className="comment__body">
                <div className="comment__title">{title}</div>
                <div className="comment__text">{text}</div>
            </div>
        </div>
    );
}

export default Comment;
