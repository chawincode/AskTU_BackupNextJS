import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col} from "reactstrap";

function BasicExample() {
    const [selected, setSelected] = useState("#all");

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col className="nav__header">
                    <Row className="d-flex justify-content-center mt-3">
                        <Col className="col_height d-flex justify-content-center col-2 p-0 ms-2 me-2">
                            <Nav.Link
                                href="#all"
                                className={selected === "#all" ? "selected" : ""}
                                onClick={() => setSelected("#all")}
                            >
                                All
                            </Nav.Link>
                        </Col>

                        <Col className="d-flex justify-content-center col-2 p-0 ms-2 me-2">
                            <NavDropdown
                                title="Answer"
                                id="basic-nav-dropdown"
                                className={selected === "#answer/all" || selected === "#anser/teacher"  ? "selected" : ""}
                            >
                                <NavDropdown.Item
                                    href="#answer/all"
                                    onClick={() => setSelected("#answer/all")}
                                >
                                    All
                                </NavDropdown.Item>


                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#anser/teacher"
                                    onClick={() => setSelected("#anser/teacher")}
                                >
                                    Teacher
                                </NavDropdown.Item>

                            </NavDropdown>


                        </Col>
                        <Col className="d-flex justify-content-center col-2 p-0 ms-2 me-2">
                            <NavDropdown
                                title="question"
                                id="basic-nav-dropdown"
                                className={selected === "#question/all" || selected === "#question/you" ? "selected" : ""}
                            >
                                <NavDropdown.Item
                                    href="#question/all"
                                    onClick={() => setSelected("#question/all")}
                                >
                                    All
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    href="#question/you"
                                    onClick={() => setSelected("#question/you")}
                                >
                                    You
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default BasicExample;
