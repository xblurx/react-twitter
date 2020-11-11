import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const CreateMessage = (props) => {
    let addMessage = (e) => {
        e.preventDefault();
        props.dispatch({ type: 'addMessage' });
        props.dispatch({ type: 'changeNewMsgText', text: '' });
    };
    let changeMsgText = (e) => {
        props.dispatch({ type: 'changeNewMsgText', text: e.target.value });
    };
    return (
        <div className="col-md-6">
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Type:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="4"
                        value={props.messagesPage.newMsgText}
                        onChange={changeMsgText}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={addMessage}>
                    Send
                </Button>
            </Form>
        </div>
    );
};
