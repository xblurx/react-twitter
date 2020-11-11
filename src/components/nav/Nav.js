import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: white;
    }

    .navbar-brand .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: #fefefe;
        }
        &:active {
        }
    }
`;

const NavigationBar = () => {
    return (
        <Styles>
            <Navbar expands="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-5">
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link href="/messages">Messages</Nav.Link>
                            <Nav.Link href="/users">Users</Nav.Link>
                            <Nav.Link href="/music">Music</Nav.Link>
                            <Nav.Link href="/videos">Videos</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
};

export default NavigationBar;
