import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const CreateMessage = (props) => {
    let ref = React.createRef();
    let addMessage = (e) => {
        e.preventDefault();
        props.functions.addMessage();
        props.functions.changeNewMsgText('');
    };
    let changeMsgText = () => {
        let msg = ref.current.value;
        props.functions.changeNewMsgText(msg);
    };
    return (
        <div className='col-md-6'>
            <Form>
                <Form.Group controlId='exampleForm.ControlTextarea2'>
                    <Form.Label>Type:</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows='4'
                        ref={ref}
                        value={props.messagesPage.newMsgText}
                        onChange={changeMsgText}
                    />
                </Form.Group>
                <Button variant='primary' type='submit' onClick={addMessage}>
                    Send
                </Button>
            </Form>
        </div>
    );
};
