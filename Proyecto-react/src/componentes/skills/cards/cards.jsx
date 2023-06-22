import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Skills from '../skills';
import ImagenJs from '../assets/js.png';
import ImagenPhp from '../assets/php.png';
import ImagenCss from '../assets/css-3.png';
import './styles.css';

const Cards = () => {
    return (
        <div className="container-cards">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenJs} />
                <Card.Body>
                    <Card.Title>JavaScript</Card.Title>
                    <Skills bgcolor="#4dff4d" progress='60' height={30}></Skills>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenCss} />
                <Card.Body>
                    <Card.Title>JavaScript</Card.Title>
                    <Skills bgcolor="#4dff4d" progress='60' height={30}></Skills>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenPhp} />
                <Card.Body>
                    <Card.Title>JavaScript</Card.Title>
                    <Skills bgcolor="#4dff4d" progress='60' height={30}></Skills>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenPhp} />
                <Card.Body>
                    <Card.Title>JavaScript</Card.Title>
                    <Skills bgcolor="#4dff4d" progress='60' height={30}></Skills>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenPhp} />
                <Card.Body>
                    <Card.Title>JavaScript</Card.Title>
                    <Skills bgcolor="#4dff4d" progress='60' height={30}></Skills>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cards;
