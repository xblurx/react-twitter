import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuth } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth()
    }
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { getAuth })(
    HeaderContainer
);
