import React from 'react';
import './Styles.css';

const Footer = () => {
    return (
        <>
            <footer className="footer-distributed">
                <div className="footer-right">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>
                </div>
                <div className="footer-left">
                    <p>Andersson Muñoz &copy; 2023</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
