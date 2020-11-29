import React from 'react';
import LoginForm from './LoginForm';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { logIn } from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';

const LoginContainer = (props) => {
    const onSubmit = (dataObject) => {
        console.log(`login form data: ${dataObject}`);
        props.logIn(dataObject);
    };
    if (props.isAuth) {
        return <Redirect to={'/profile'} />;
    }
    return (
        <div>
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

const enhance = compose(
    connect(mapStateToProps, {
        logIn,
    })
);

export default enhance(LoginContainer);
