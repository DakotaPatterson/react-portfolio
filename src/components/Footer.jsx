import {Container, Row, Col, Stack, Image, Nav, NavLink} from "react-bootstrap";

import { Link } from 'react-router-dom';

import githubIcon from '../assets/github.png';  
import linkedinIcon from '../assets/linkdin.png';
import stackoverflowIcon from '../assets/stackoverflow.png';
import me from '../assets/me.jpg';


function Footer(){

    return (
        <footer>
            <Container fluid>
                <Row className="bg-primary text-white p-4">
                    <Col className="mx-5">
                        <Stack className="profile-container">
                            <Image
                                src={me}
                                alt="Profile Picture"
                                rounded
                                width={150}
                                height={200}
                                
                            />
                            <h2>Dakota Patterson</h2>
                            <p>Entry Level Developer</p>
                        </Stack>
                    </Col>
                    <Col className="mx-5">
                        <Nav className="flex-column fs-5">
                            Useful Links:
                            <NavLink href="/" className="text-white">About Me</NavLink>
                            <NavLink href="Portfolio" className="text-white">Portfolio</NavLink>
                            <NavLink href="Resume" className="text-white">Resume</NavLink>
                            <NavLink href="Contact" className="text-white">Contact</NavLink>
                        </Nav>
                    </Col>
                    <Col>
                        Contact Info:
                       <Link to= "https://github.com/DakotaPatterson">
                        <Image src={githubIcon} className="icon githubIcon" />
                       </Link>
                       <Link to= "https://www.linkedin.com/in/dakota-patterson-494131312/">
                        <Image src={linkedinIcon} className="icon linkdInIcon" />
                       </Link>
                       <Link to= "https://stackoverflow.com/users/25702843/dakota">
                        <Image src={stackoverflowIcon} className="icon stackOverflowIcon" />
                       </Link>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;  