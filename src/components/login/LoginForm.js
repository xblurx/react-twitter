import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Col, Form, Button } from 'react-bootstrap';

const Container = styled.div`
    margin-top: 100px;
    margin-left: 300px;
`;

const LoginForm = (props) => {
    const { register, handleSubmit } = useForm();

    return (
        <Container>
            <Col md={5}>
                <Form onSubmit={handleSubmit(props.onSubmit)}>
                    <div className="text-center mb-4">
                        <h4>Sign in here, hon</h4>
                    </div>
                    <Form.Group controlId="login">
                        <Form.Control
                            name="email"
                            placeholder="Login"
                            ref={register}
                        />
                    </Form.Group>
                    <Form.Group controlId="password" className="mt-4">
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            ref={register}
                        />
                    </Form.Group>
                    <Form.Group controlId="rememberMe" className="mt-4">
                        <Form.Check
                            type="checkbox"
                            name="rememberMe"
                            label="Remember me"
                            ref={register}
                        />
                    </Form.Group>
                    <div className="text-center mt-4" >
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </Col>
        </Container>
    );
};

export default LoginForm;
