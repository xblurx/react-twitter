import React from 'react';
import CreateMessageForm from './CreateMessageForm';

export const CreateMessage = (props) => {
    let onSubmit = (value) => {
        props.addMessage(value.msgText);
    };

    return <CreateMessageForm onSubmit={onSubmit} />;
};
