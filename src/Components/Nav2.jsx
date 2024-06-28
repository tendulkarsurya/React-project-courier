
import React from "react";
import {Container} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import offcanvasNavbar from 'react-bootstrap/Offcanvas'
import offcanvasNavbarLabel from 'react-bootstrap/Offcanvas'
// import logo from "../Icons/logo.png";
// import offcanvasNavbarLabel from 'bootstrap/OffcanvasNavbar'



const Header = () => {

    return (
        <div
            className="headers"
            style={{
                position: "sticky",
                top: "0px",
                zIndex: "9999999",
                backgroundColor: "white",
            }}
        >
            {["xl"].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                    style={{ padding: "0px", background: "white" }}
                >
                    <Container fluid style={{ padding: "5px 20px" }}>
                        <div className="d-flex gap-2">
                            <a href="/" className="tail-text">
                                <img src="../Assets/logo.png" alt="Logo" className="logo" />
                            </a>

                        </div>
                        <Navbar.Toggle
                            aria-controls={offcanvasNavbar-expand-`${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={offcanvasNavbar-expand-`${expand}`}
                            aria-labelledby={offcanvasNavbarLabel-expand-`${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton></Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav
                                    className="justify-content-end flex-grow-1 pe-3"
                                    style={{ alignItems: "center" }}
                                >
                                    <Nav.Link href="/" className="tail-text">
                                        HOME
                                    </Nav.Link>
                                    <Nav.Link href="/aboutus" className="tail-text">
                                        ABOUT US
                                    </Nav.Link>
                                    
                                    <Nav.Link href="/service" className="tail-text">
                                        SERVICE
                                    </Nav.Link>
                                    <Nav.Link href="/contactus" className="tail-text">
                                        CONTACT US
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    )
}

export default Header