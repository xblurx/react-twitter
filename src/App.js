import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home} from './components/home/Home';
import Header from './components/header/Header';
import Messages from './components/messages/Messages';
import NavigationBar from './components/nav/Nav';
import Profile from './components/profile/Profile';
import Music from './components/music/Music';
import Videos from './components/videos/Videos';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';


const App = (props) => {
    return (
        <Router>
            <Container fluid>
                <Row>
                    <Header/>
                </Row>
                <Row>
                    <Col md={2}>
                        <NavigationBar/>
                    </Col>
                    <Col md={9}>
                        <Route exact path='/' component={Home}/>
                        <Route
                            path='/profile'
                            render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}
                        />
                        <Route
                            path='/messages'
                            render={() => <Messages state={props.state.messagesPage} dispatch={props.dispatch}/>}
                        />
                        <Route path='/music' component={Music}/>
                        <Route path='/videos' component={Videos}/>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
};

export default App;
