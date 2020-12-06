import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Switch from '../common/Switch';

const ProfileForm = (props) => {
    const { register, handleSubmit, setError, errors } = useForm();
    const onSubmit = async (data, e) => {
        console.log(data);
        const errorsMsg = await props.onSubmit(data);
        if (!errorsMsg.length) {
            e.target.reset();
            props.setEditMode(!props.editMode)
            return 0
        }

        setError('fullName', { type: 'manual', message: errorsMsg });
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Control.Feedback type={errors.whole ? 'invalid' : ''}>
                {errors.fullName && (
                    <p className="text-danger">{errors.fullName.message}</p>
                )}
            </Form.Control.Feedback>
            <Form.Group controlId="userFullName">
                <Form.Control
                    name="fullName"
                    className={
                        errors.fullName && errors.fullName.message
                            ? 'is-invalid'
                            : 'valid'
                    }
                    placeholder="Enter your full name"
                    ref={register}
                />
            </Form.Group>
            <Form.Group controlId="jfj">
                <Form.Label>
                    Are you looking for a job at the moment?
                </Form.Label>
                <Switch name={'lookingForAJob'} reference={register} />
                <Form.Control
                    className="mt-3"
                    as="textarea"
                    name="lookingForAJobDescription"
                    placeholder="What do you want to tell about your job search?"
                    rows={3}
                    ref={register}
                />
            </Form.Group>
            <Form.Group controlId="aboutMe">
                <Form.Control
                    className="mt-3"
                    as="textarea"
                    name="aboutMe"
                    placeholder="Tell the world about yourself!"
                    rows={3}
                    ref={register}
                />
            </Form.Group>
            <div className="mt-4">
                <Button variant="primary" type="submit">
                    Update profile
                </Button>
            </div>
        </Form>
    );
};

export default ProfileForm;
