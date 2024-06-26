import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';

import resumeFile from '../assets/ResumeDoc.pdf';


export default function Resume() {

  const proficiencies = [
    'HTML',
    'CSS',
    'Git',
    'JavaScript',
    'Bootstrap',
    'JQuery',
    'JSON',
    'AJAX',
    'Node',
    'ES6',
    'Object-oriented programming',
    'Express',
    'MySQL',
    'MVC',
    'Sequelize',
    'MongoDB',
    'React',
    'Insomnia',
    'Heroku',
    'Visual Studio Code',
  ];

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1 className="mb-4">Resume</h1>
          <Button variant="primary" href={resumeFile} target = "_blank" download>
            Download Resume
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Proficiencies</h2>
          <ListGroup>
            {proficiencies.map((proficiency, index) => (
              <ListGroup.Item key={index}>{proficiency}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
