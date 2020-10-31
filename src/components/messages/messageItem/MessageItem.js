import React from 'react';

const Message = (props) => {
    return (
        <div className='text-md-right'>
            <div className="mb-5">{props.text}</div>
        </div>
    );
};

export default Message;
