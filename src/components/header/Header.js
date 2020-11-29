import React from 'react';
import { Nav, Navbar, NavLink } from 'react-bootstrap';

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
                <Navbar.Text className="mr-3">
                    {!props.auth.isAuth ? (
                        <Nav.Link href="/login">Log in</Nav.Link>
                    ) : (
                        `Signed in as ${props.auth.login}`
                    )}
                </Navbar.Text>

                <Navbar.Text>
                    {props.auth.isAuth && (
                        <NavLink onClick={props.logOut}>Log out</NavLink>
                    )}
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
