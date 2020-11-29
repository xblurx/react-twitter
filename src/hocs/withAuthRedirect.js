import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {
    const Wrapper = (props) => {
        console.log(`withAuthRedirect isAuth: ${props.isAuth}`)
        if (!props.isAuth) {
            console.log('withAuthRedirect read auth');
            return <Redirect to={'/login'} />;
        }
        return <Component {...props} />;
    };
    return connect(mapStateToProps)(Wrapper);
};
