import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CreatePost = (props) => {
    let addPost = (e) => {
        e.preventDefault();
        props.addPost()
        props.changePostText('')
    };

    let changePostText = (e) => {
        props.changePostText(e.target.value)
    };
    return (
        <div className="mt-5 col-md-5">
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Create a post:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="4"
                        value={props.profilePage.newPostText}
                        onChange={changePostText}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={addPost}>
                    Create
                </Button>
            </Form>
        </div>
    );
};

export default CreatePost;
