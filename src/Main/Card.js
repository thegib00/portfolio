import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Card.css';
import Image from './Project-pictures/world-data-explorer.png'

function BasicCard() {
    return (
        <div className="Outter-Box">
            <Container>
                    <Row className="Row">
                        <Col className="Col">
                            <Card className="Card-Box">
                                <Card.Img variant="top" className="Project-Pictures" src={Image} />
                                <Card.Body className="Card-Body">
                                    <Card.Title className="Card-Title">Interactive World Data Explorer</Card.Title>
                                    <Card.Text className="Card-Text">
                                        An Angular web application featuring SVG elements
                                        representing every country in the world. By integrating the World
                                        Bank API, the app dynamically displays detailed information about
                                        each country when users hover over the respective SVG elements.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="Col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
    );
}

export default BasicCard;
