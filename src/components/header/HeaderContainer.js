import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logOut } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { logOut })(HeaderContainer);
