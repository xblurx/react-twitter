import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Status from './StatusHooks';
import { useForm } from 'react-hook-form';
import ProfileForm from '../ProfileForm';

const Avatar = styled.img`
    width: 50%;
    border-radius: 50%;
    display: block;
    margin: auto;
`;

const ProfilePerson = (props) => {
    const { register, handleSubmit } = useForm();
    const [editMode, setEditMode] = useState(false);
    const submitPhoto = (e) => {
        if (e.image.length) {
            props.saveAvatar(e.image[0]);
        }
    };
    let avatar =
        props.profile.photos.large === ''
            ? 'https://avatars.yandex.net/get-music-content/3226792/508b3a1b.p.58069/s400x400'
            : props.profile.photos.large;
    return (
        <>
            <Row>
                <Col md={4}>
                    <Avatar src={avatar} />
                    {props.isOwnPage && (
                        <Form
                            onSubmit={handleSubmit(submitPhoto)}
                            className="mt-5"
                        >
                            <Form.Group>
                                <Form.File
                                    id="photo-form"
                                    name="image"
                                    label="Upload a photo to change your profile image :)"
                                    ref={register}
                                />
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="mt-3"
                                >
                                    Upload
                                </Button>
                            </Form.Group>
                        </Form>
                    )}
                </Col>
                <Row>
                    <Col>
                        <h2>
                            {props.profile.fullName
                                ? props.profile.fullName
                                : 'Avril Lavigne'}
                        </h2>
                        <Status
                            status={props.status}
                            updateStatus={props.updateStatus}
                        />
                    </Col>
                </Row>
            </Row>
            <Button onClick={() => setEditMode(!editMode)}>Edit profile</Button>
            {editMode && (
                <Row className="mt-5">
                    <Col md={5}>
                        <ProfileForm
                            onSubmit={props.updateProfile}
                            editMode={editMode}
                            setEditMode={setEditMode}
                        />
                    </Col>
                </Row>
            )}
        </>
    );
};

export default ProfilePerson;
