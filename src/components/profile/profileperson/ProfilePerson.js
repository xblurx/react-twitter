import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Status from './StatusHooks';
import { useForm } from 'react-hook-form';

const Avatar = styled.img`
    width: 50%;
    border-radius: 50%;
    display: block;
    margin: auto;
`;

const ProfilePerson = ({ profile, status, updateStatus, saveAvatar }) => {
    const [register, handleSubmit] = useForm();
    const submitPhoto = (e) => {
        if (e.target.files.length) {
            saveAvatar(e.target.files[0]);
        }
    };
    return (
        <>
            <Row>
                <Col md={4}>
                    <Avatar
                        src={
                            profile === null
                                ? 'https://avatars.yandex.net/get-music-content/3226792/508b3a1b.p.58069/s400x400'
                                : profile.photos.small
                        }
                    />
                </Col>
                <Col>
                    <h2>
                        {profile === null ? 'Avril Lavigne' : profile.fullName}
                    </h2>
                    <Status status={status} updateStatus={updateStatus} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit(submitPhoto)}>
                        <Form.Group>
                            <Form.File
                                id="photo-form"
                                name="image"
                                label="Upload a photo to change your profile image :)"
                                ref={register}
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default ProfilePerson;
