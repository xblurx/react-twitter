import React from 'react';
import styled from 'styled-components';
import { Button, Col, Row } from 'react-bootstrap';

const Wrapper = styled.div`
    width: 600px;
    border-radius: 0.75rem;
    box-shadow: 3px 4px 9px -1px rgba(255, 170, 229, 0.54);
    padding: 2em;
    margin-top: 2rem;
    font-weight: light;
`;

const Img = styled.img`
    border-radius: 50%;
    width: 90px;
`;

const User = (props) => {
    return (
        <Row>
            <Col md="2" className="mt-4 pl-5">
                <Img src={!props.user.photos.small ? 'https://highxtar.com/wp-content/uploads/2020/07/highxtar-apple-new-emojis-4.png' : props.user.photos.small} alt="nonzo" />
                <div className="mt-3">
                    <Button
                        variant="primary"
                        onClick={() =>
                            props.dispatch({
                                type: 'toggleFollow',
                                userId: props.user.id,
                            })
                        }
                    >
                        {props.user.following ? 'Unfollow' : 'Follow'}
                    </Button>
                </div>
            </Col>
            <Col md="10" className="d-flex">
                <Wrapper>
                    <Row>
                        <Col className="h-100">
                            <h4>{props.user.name}</h4>
                            <p className="font-italic">{props.user.status}</p>
                        </Col>
                        <Col>
                            {`${'props.user.location.city'}, ${'props.user.location.country'}`}
                        </Col>
                    </Row>
                </Wrapper>
            </Col>
        </Row>
    );
};

export default User;
