import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import projectsData from '../components/projectData'; 


export default function Portfolio() {
  return (
<Container>
      <h1 className="mt-5 mb-4">Portfolio</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projectsData.map((project, index) => (
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.deployedUrl} target="_blank" rel="noopener noreferrer">View Application</Button>{' '}
                <Button variant="secondary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">View GitHub</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
