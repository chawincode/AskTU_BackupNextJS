import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Container, Row, Col, Input } from "reactstrap";

const Newquestion = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <Container fluid>
        <Row className="justify-content-center  mt-5 pt-5 ">
          <Col className="col-8 bg-3E4558 rounded-top ">
            <Row className="m-3">
              <Col className="col-2 p-0">
                <text className="text-light ">Nick Name</text>
              </Col>
              <Col className="col-4">
                <text className="text-989898">{time}</text>
              </Col>
              <Col className="d-flex justify-content-end ms-3">
                <text className="text-light me-3">From Class</text>
                <text className="text-989898">class name</text>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mb-5">
          <Col className="border col-8 p-5 rounded-bottom">
            <Input className="border-0 p-3" placeholder="Type your question"></Input>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Button variant="272727 col-1 justify-content-center rounded-pill ">send</Button>
        </Row>
      </Container>
    </main>
  );
};

export default Newquestion;