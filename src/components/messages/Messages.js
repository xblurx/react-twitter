import React from 'react';
import Message from './messageItem/MessageItem';
import MessagePeople from './messagePeople/MessagePeople';
import { CreateMessage } from './CreateMessage';
import { Col, Row } from 'react-bootstrap';

const Messages = (props) => {
    let peopleComponents = props.messagesPage.people.map((p) => (
        <MessagePeople id={p.id} key={p.id} name={p.name} avatar={p.avatar} />
    ));
    let messageComponents = props.messagesPage.messages.map((m) => (
        <Message id={m.id} key={m.id} text={m.text} />
    ));

    return (
        <Row className="mt-5 ml-5 pl-5">
            <Col md={4}>{peopleComponents}</Col>
            <Col md={8}>
                <Row>
                    <Col>{messageComponents}</Col>
                </Row>
                <Row className="justify-content-end">
                    <CreateMessage
                        addMessage={props.addMessage}
                    />
                </Row>
            </Col>
        </Row>
    );
};

export default Messages;
