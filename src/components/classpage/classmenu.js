import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Classmenu = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [buttons, setButtons] = useState(['SF340', 'SF341', 'SF342']);

  const handleClick = button => {
    setActiveButton(button);
  };

  const addButton = newButton => {
    setButtons([...buttons, newButton]);
  };

  return (
    <Container fluid>
      <Row>
        <Col className='d-flex flex-column bg-373737 col-2 vh-100 p-0'>
          {buttons.map(button => (
            <button type="button" className={`p-3 btn btn-outline-dark border-0 rounded-0 text-light text-start ${activeButton === button ? 'active' : ''}`} onClick={() => handleClick(button)}>
              {button}
            </button>
          ))}
          <button 
          type='button'
          className='bg-373737 text-light border-0 p-3 btn btn-sm'
          onClick={() => addButton('New class')}>+ Add class</button>
        </Col>
      </Row>
    </Container>
  )
};

export default Classmenu;