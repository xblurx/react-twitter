import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CreatePost = (props) => {
    let ref = React.createRef();
    let addPost = () => {
        props.profilePage.addPost();
    };

    let changePostText = () => {
        let message = ref.current.value;
        props.profilePage.changeNewPostText(message);
    };

    return (
        <div className='mt-5 col-md-5'>
            <Form>
                <Form.Group controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Create a post:</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows='4'
                        ref={ref}
                        value={props.profilePage.newPostText}
                        onChange={changePostText}
                    />
                </Form.Group>
                <Button variant='primary' type='button' onClick={addPost}>
                    Create
                </Button>
            </Form>
        </div>
    );
};

export default CreatePost;
