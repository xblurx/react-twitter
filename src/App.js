import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import Header from './components/header/Header';
import NavigationBar from './components/nav/Nav';
import Music from './components/music/Music';
import Videos from './components/videos/Videos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { store } from './redux/redux-store';
import ProfileContainer from './components/profile/ProfileContainer';
import MessagesContainer from './components/messages/MessagesContainer';
import UsersContainer from './components/users/UsersContainer';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Container fluid>
                    <Row>
                        <Header />
                    </Row>
                    <Row>
                        <Col md={2}>
                            <NavigationBar />
                        </Col>
                        <Col md={9}>
                            <Route exact path="/" component={Home} />
                            <Route
                                path="/profile"
                                render={() => <ProfileContainer />}
                            />
                            <Route
                                path="/messages"
                                render={() => <MessagesContainer />}
                            />
                            <Route
                                path="/users"
                                render={() => <UsersContainer />}
                            />
                            <Route path="/music" component={Music} />
                            <Route path="/videos" component={Videos} />
                        </Col>
                    </Row>
                </Container>
            </Router>
        </Provider>
    );
};

export default App;
