import React from 'react';
import Post from './post/Post';

const MyPosts = (props) => {
    let postComponents = props.posts.map((p) => (
        <Post message={p.message} id={p.id} key={p.id} img={p.img} likes={p.likes} />
    ));
    return (
        <div>
            <div className="ml-4 mt-5 pt-5">
                <h5>Posts:</h5>
                {postComponents}
            </div>
        </div>
    );
};

export default MyPosts;
