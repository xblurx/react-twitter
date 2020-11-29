import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const CreatePostForm = (props) => {
    const { register, handleSubmit, errors } = useForm();

    return (
        <div className="mt-5 col-md-5">
            <Form
                onSubmit={handleSubmit(props.onSubmit)}
            >
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Create a post:</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="postMessage"
                        rows="4"
                        ref={register({
                            required: 'Just type, dummy',
                            maxLength: 255,
                        })}
                        className={errors.postMessage ? 'is-invalid' : 'valid'}
                    />
                    <Form.Control.Feedback
                        type={errors.postMessage ? 'invalid' : ''}
                    >
                        {errors.postMessage && (
                            <p>{errors.postMessage.message}</p>
                        )}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    );
};

export default CreatePostForm;
