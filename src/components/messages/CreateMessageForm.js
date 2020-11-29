import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';

const CreateMessageForm = (props) => {
    const { register, handleSubmit } = useForm();
    return (
        <div className="col-md-6">
            <Form onSubmit={handleSubmit(props.onSubmit)}>
                <Form.Group controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Type:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="4"
                        name="msgText"
                        ref={register}
                    />
                </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
            </Form>
        </div>
    );
};

export default CreateMessageForm;
