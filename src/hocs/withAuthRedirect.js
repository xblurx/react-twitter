import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const WithAuthRedirect = (Component) => {
    let Wrapper = (props) => {
        if (!props.isAuth) {
            return <Redirect to={'/login'} />;
        }
        return <Component {...props}/>
    }
    return connect(mapStateToProps)(Wrapper)
};

export default WithAuthRedirect;