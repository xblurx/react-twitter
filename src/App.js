import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Home from './components/home/Home';
import NavigationBar from './components/nav/Nav';
import Music from './components/music/Music';
import Videos from './components/videos/Videos';
import MessagesContainer from './components/messages/MessagesContainer';
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import LoginContainer from './components/login/LoginContainer';
import { initApp } from './redux/app-reducer';
import Loader from './components/users/Loader';
import ProfileHooksContainer from './components/profile/ProfileHooksContainer';

class App extends React.Component {
    componentDidMount() {
        this.props.initApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Loader isFetching={true} />;
        }

        return (
            <Container fluid>
                <HeaderContainer />
                <Row>
                    <Col md={2}>
                        <NavigationBar />
                    </Col>
                    <Col md={9}>
                        <Route exact path="/" component={Home} />
                        <Route
                            path="/profile/:userId?"
                            component={ProfileHooksContainer}
                        />
                        <Route path="/messages" component={MessagesContainer} />
                        <Route path="/users" component={UsersContainer} />
                        <Route path="/music" component={Music} />
                        <Route path="/videos" component={Videos} />
                        <Route path="/login" component={LoginContainer} />
                    </Col>
                </Row>
            </Container>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

export default compose(withRouter, connect(mapStateToProps, { initApp }))(App);
