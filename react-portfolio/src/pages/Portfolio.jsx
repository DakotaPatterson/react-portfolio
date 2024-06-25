import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import projectsData from '../components/projectData'; 
import '../App.css';


export default function Portfolio() {
  return (
<Container>
      <h1 className="mt-5 mb-4">Portfolio</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projectsData.map((project, index) => (
          <Col key={index}>
            <Card className="h-100">
            <div className="image-container">
              <Card.Img variant="top" src={project.image} />
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="mt-auto">
                <Button variant="primary" href={project.deployedUrl} target="_blank" rel="noopener noreferrer">View Application</Button>{' '}
                <Button variant="secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">View GitHub</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br></br>
      <br></br>
    </Container>
  );
}
