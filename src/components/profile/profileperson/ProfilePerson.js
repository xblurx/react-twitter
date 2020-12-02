import React from 'react';
import Loader from '../../users/Loader';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import StatusHooks from './StatusHooks';

const Avatar = styled.img`
    width: 50%;
    border-radius: 50%;
    display: block;
    margin: auto;
`;

const ProfilePerson = (props) => {
    debugger;
    if (!props.profile.photos) {
        if (!props.profile.avatar) {
            return <Loader isFetching={true} />;
        }
    }
    return (
        <Row>
            <Col md={4}>
                <Avatar
                    src={
                        'https://avatars.yandex.net/get-music-content/3226792/508b3a1b.p.58069/s400x400'
                    }
                />
            </Col>
            <Col>
                <h2>
                    {props.profile.avatar
                        ? props.profile.name
                        : props.profile.fullName}
                </h2>
                {/*<Status*/}
                {/*    status={props.status}*/}
                {/*    updateStatus={props.updateStatus}*/}
                {/*/>*/}
                <StatusHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </Col>
        </Row>
    );
};

export default ProfilePerson;
