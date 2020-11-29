import React from 'react';
import CreatePostForm from './CreatePostForm';

const CreatePost = (props) => {
    let onSubmit = (value) => {
        props.addPost(value.postMessage)
    };
    return (
        <CreatePostForm onSubmit={onSubmit}/>
    );
};

export default CreatePost;
