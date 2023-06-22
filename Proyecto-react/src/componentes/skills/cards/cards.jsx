import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Skills from '../PostgresBar/skills';
import ImagenJs from '../assets/js.png';
import ImagenPhp from '../assets/php.png';
import ImagenCss from '../assets/css-3.png';
import ImagenPY from '../assets/piton.png';
import ImagenDART from '../assets/programacion.png';
import ImagenHTML from '../assets/html-5.png';
import ImagenJAVA from '../assets/java.png';
import ImagenDart from '../assets/dart.png';
import ImagenAngular from '../assets/angular.jpg';
import ImagenPGSQL from '../assets/postgre.png';
import ImagenMYSQL from '../assets/mysql.png';
import './styles.css';

const Cards = () => {
    return (
        <div className="container-cards">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenJs} />
                <Card.Body>
                    <Card.Title>JavaScript</Card.Title>
                    <Skills bgcolor="#ffff1a" progress='50' height={30}></Skills>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenCss} />
                <Card.Body>
                    <Card.Title>CSS</Card.Title>
                    <Skills bgcolor="#4dff4d" progress='70' height={30}></Skills>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenPhp} />
                <Card.Body>
                    <Card.Title>PHP</Card.Title>
                    <Skills bgcolor="#4dff4d" progress='60' height={30}></Skills>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenPY} />
                <Card.Body>
                    <Card.Title>Python</Card.Title>
                    <Skills bgcolor="#ff751a" progress='40' height={30}></Skills>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenHTML} />
                <Card.Body>
                    <Card.Title>HTML</Card.Title>
                    <Skills bgcolor="#ff751a" progress='40' height={30}></Skills>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenJAVA} />
                <Card.Body>
                    <Card.Title>Java</Card.Title>
                    <Skills bgcolor="#4dff4d" progress='70' height={30}></Skills>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenDART} />
                <Card.Body>
                    <Card.Title>Flutter</Card.Title>
                    <Skills bgcolor="#ff0000" progress='30' height={30}></Skills>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenAngular} />
                <Card.Body>
                    <Card.Title>Angular</Card.Title>
                    <Skills bgcolor="#ff0000" progress='30' height={30}></Skills>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenDart} />
                <Card.Body>
                    <Card.Title>Dart</Card.Title>
                    <Skills bgcolor="#ff0000" progress='30' height={30}></Skills>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenPGSQL} />
                <Card.Body>
                    <Card.Title>PostgreSQL</Card.Title>
                    <Skills bgcolor="#ffff1a" progress='55' height={30}></Skills>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ImagenMYSQL} />
                <Card.Body>
                    <Card.Title>MySQL</Card.Title>
                    <Skills bgcolor="#ffff1a" progress='50' height={30}></Skills>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cards;
