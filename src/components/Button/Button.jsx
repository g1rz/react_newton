import React from 'react';

import './Button.sass';

function Button({ children, onShowComment }) {
    return (
        <button className="btn" onClick={() => onShowComment()}>
            {children}
        </button>
    );
}

export default Button;
