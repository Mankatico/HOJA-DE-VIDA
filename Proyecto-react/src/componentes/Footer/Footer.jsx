import React from 'react';
import './Styles.css';
import LogoIns from './assets/instagram.png';
import LogoTwt from './assets/gorjeo.png';
import LogoFac from './assets/facebook.png';
import LogoGit from './assets/github.png';
import LogoWtt from './assets/whatsapp.png';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-Imgs">
                    <a href="https://instagram.com/andersson_mun0z?igshid=NGExMmI2YTkyZg==" className='i'><img src={LogoIns} alt="" /></a>
                    <a href="https://twitter.com/AnderssonMuoz3?t=77LB_BlupzveIicuLs_DrQ&s=09" className='t'><img src={LogoTwt} alt="" /></a>
                    <a href="https://www.facebook.com/Mankatico?mibextid=ZbWKwL" className='f'><img src={LogoFac} alt="" /></a>
                    <a href="https://github.com/Mankatico" className='g'><img src={LogoGit} alt="" /></a>
                    <a href="https://wa.me/qr/BOXY2SPOIPNYL1" className='w'><img src={LogoWtt} alt="" /></a>
                </div>
                <div className='footer-info'>
                    <h3>Andersson Muñoz</h3>
                    <p>Norte de santader / Pamplona</p>
                    <p>2023</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
