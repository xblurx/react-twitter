import React from 'react';
import CreatePostForm from './CreatePostForm';

const CreatePost = (props) => {
    let onSubmit = (value, e) => {
        props.addPost(value.postMessage)
        e.target.reset();
    };
    return (
        <CreatePostForm onSubmit={onSubmit}/>
    );
};

export default CreatePost;
