import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = (props) => {
    return (
        <Navbar bg="light">
            <Navbar.Brand>
                <img
                    src="https://www.cineramageddon.com/wp-content/uploads/2020/06/twitter-logo.png"
                    alt=""
                    width="10%"
                />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>{!props.auth.isAuth ? 'Log in' : `Signed in as ${props.auth.login}`}</Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
